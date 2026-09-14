export const CMS_FILE_NAME = "portfolio_cms_data.json";

export async function findDriveFile(accessToken: string, fileName: string): Promise<string | null> {
    const q = encodeURIComponent(`name = '${fileName}' and trashed = false`);
    const res = await fetch(`https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id)`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    
    if (!res.ok) throw new Error('Failed to search Drive');
    const data = await res.json();
    
    if (data.files && data.files.length > 0) {
        return data.files[0].id;
    }
    return null;
}

export async function loadDataFromDrive(accessToken: string): Promise<any | null> {
    const fileId = await findDriveFile(accessToken, CMS_FILE_NAME);
    if (!fileId) return null;
    
    const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    
    if (!res.ok) throw new Error('Failed to download data from Drive');
    return await res.json();
}

export async function saveDataToDrive(accessToken: string, content: any): Promise<void> {
    const fileId = await findDriveFile(accessToken, CMS_FILE_NAME);
    const boundary = '-------314159265358979323846';
    const delimiter = "\r\n--" + boundary + "\r\n";
    const close_delim = "\r\n--" + boundary + "--";
    
    const contentType = 'application/json';
    const metadata = {
        name: CMS_FILE_NAME,
        mimeType: contentType
    };
    
    const multipartRequestBody =
        delimiter +
        'Content-Type: application/json\r\n\r\n' +
        JSON.stringify(metadata) +
        delimiter +
        'Content-Type: ' + contentType + '\r\n\r\n' +
        JSON.stringify(content, null, 2) +
        close_delim;

    let url = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
    let method = 'POST';
    
    if (fileId) {
        url = `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart`;
        method = 'PATCH';
    }

    const res = await fetch(url, {
        method,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': `multipart/related; boundary=${boundary}`
        },
        body: multipartRequestBody
    });

    if (!res.ok) throw new Error('Failed to save data to Drive');
}

export async function uploadImageToDrive(accessToken: string, file: File): Promise<string> {
    const metadata = {
        name: file.name,
        mimeType: file.type,
    };
    
    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', file);
    
    const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        body: form
    });
    
    if (!response.ok) {
        throw new Error('Failed to upload image to Drive');
    }
    
    const data = await response.json();
    
    // Make public
    await fetch(`https://www.googleapis.com/drive/v3/files/${data.id}/permissions`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            role: 'reader',
            type: 'anyone'
        })
    });
    
    // Fetch the thumbnailLink which works in img tags
    const fileRes = await fetch(`https://www.googleapis.com/drive/v3/files/${data.id}?fields=thumbnailLink`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    const fileData = await fileRes.json();
    
    if (fileData.thumbnailLink) {
        // Remove the size parameter (e.g., =s220) to get the original/larger image
        return fileData.thumbnailLink.replace(/=s\d+$/, '=s2000');
    }
    
    return `https://drive.google.com/thumbnail?id=${data.id}&sz=w1000`;
}

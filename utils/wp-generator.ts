import JSZip from 'jszip';
import * as FileSaver from 'file-saver';

// Robustly handle saveAs whether it's a default export or named export
const saveAs = FileSaver.saveAs || FileSaver.default || FileSaver;

export const downloadTheme = async () => {
  const zip = new JSZip();
  const themeName = "yamikani-portfolio";
  const folder = zip.folder(themeName);

  if (!folder) return;

  // style.css
  folder.file("style.css", `/*
Theme Name: Yamikani Banda Portfolio
Author: Yamikani Banda
Description: A high-performance portfolio theme converted from React.
Version: 1.0.0
*/
`);

  // functions.php
  folder.file("functions.php", `<?php
function yamikani_enqueue_assets() {
    // Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap', [], null);
    wp_enqueue_style('material-icons', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap', [], null);
    
    // Theme Styles
    wp_enqueue_style('main-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'yamikani_enqueue_assets');

function yamikani_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'yamikani_theme_support');
?>`);

  // header.php
  const headerContent = `<!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              primary: "#4b0fd7",
              "primary-dark": "#3a0ca3",
              accent: "#D2F646",
              "background-light": "#f6f6f8",
              "background-dark": "#151022",
              "surface-light": "#ffffff",
              "surface-dark": "#1e1930",
            },
            fontFamily: {
              sans: ["Public Sans", "sans-serif"],
              display: ["Montserrat", "sans-serif"],
            },
            backgroundImage: {
              'grid-pattern': "radial-gradient(#4b0fd71a 1px, transparent 1px)",
            }
          },
        },
      }
    </script>
    <style>
      body { font-family: 'Public Sans', sans-serif; }
      .grid-bg { background-image: radial-gradient(#4b0fd71a 1px, transparent 1px); background-size: 20px 20px; }
    </style>
</head>
<body <?php body_class('bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300 flex flex-col min-h-screen'); ?>>

<!-- Navbar -->
<header class="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-sm transition-all duration-300">
  <div class="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
    <a href="<?php echo home_url(); ?>" class="flex items-center gap-3 group">
      <div class="bg-primary text-white p-1.5 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
        <span class="material-symbols-outlined text-xl">token</span>
      </div>
      <span class="font-display font-bold text-lg tracking-tight">Yamikani Banda</span>
    </a>
    <nav class="hidden md:flex items-center gap-8">
      <a href="<?php echo home_url(); ?>" class="text-sm font-semibold hover:text-primary transition-colors">Home</a>
      <a href="<?php echo home_url('/skills'); ?>" class="text-sm font-semibold hover:text-primary transition-colors">Skills</a>
      <a href="<?php echo home_url('/projects'); ?>" class="text-sm font-semibold hover:text-primary transition-colors">Projects</a>
      <a href="<?php echo home_url('/leadership'); ?>" class="text-sm font-semibold hover:text-primary transition-colors">Leadership</a>
      <a href="<?php echo home_url('/contact'); ?>" class="text-sm font-semibold hover:text-primary transition-colors">Contact</a>
    </nav>
    <div class="flex items-center gap-4">
      <a href="<?php echo home_url('/contact'); ?>" class="hidden sm:flex bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105">Hire Me</a>
    </div>
  </div>
</header>
<main class="flex-grow">`;
  folder.file("header.php", headerContent);

  // footer.php
  const footerContent = `</main>
<footer class="border-t border-[#e5e7eb] dark:border-white/10 py-12 bg-white dark:bg-[#1e1930]/30 mt-auto">
  <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
    <div class="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
      <div class="size-6 bg-primary rounded flex items-center justify-center text-white">
        <span class="material-symbols-outlined text-xs">token</span>
      </div>
      <span class="font-bold text-sm tracking-tight">Yamikani Banda</span>
    </div>
    <div class="flex flex-wrap justify-center gap-6">
       <a href="<?php echo home_url(); ?>" class="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-primary transition-colors">Home</a>
       <a href="<?php echo home_url('/skills'); ?>" class="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-primary transition-colors">Skills</a>
       <a href="<?php echo home_url('/projects'); ?>" class="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-primary transition-colors">Work</a>
    </div>
    <div class="flex items-center gap-4">
      <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 hover:bg-primary hover:text-white transition-colors text-slate-500"><span class="font-bold text-xs">LI</span></a>
      <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 hover:bg-primary hover:text-white transition-colors text-slate-500"><span class="font-bold text-xs">X</span></a>
      <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 hover:bg-primary hover:text-white transition-colors text-slate-500"><span class="font-bold text-xs">GH</span></a>
    </div>
  </div>
  <div class="text-center mt-8">
    <p class="text-xs text-slate-400 font-medium">© <?php echo date('Y'); ?> Yamikani Banda. Built with React & Tailwind.</p>
  </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>`;
  folder.file("footer.php", footerContent);

  // front-page.php (Home Page Content)
  const homeHtml = `
  <div class="w-full">
      <!-- Hero Section -->
      <section class="relative pt-12 pb-20 md:pt-24 md:pb-32 px-6 overflow-hidden">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -z-10"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div class="flex flex-col gap-8">
            <div class="inline-flex items-center gap-2 bg-accent/20 text-slate-900 dark:text-accent px-4 py-1.5 rounded-full w-fit border border-accent/20">
              <span class="material-symbols-outlined text-sm">bolt</span>
              <span class="text-xs font-bold uppercase tracking-wider">Available for new projects</span>
            </div>
            
            <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              Digital Builder & <br/> Brand Minded <span class="text-primary underline decoration-accent decoration-4 underline-offset-4">Problem Solver</span>
            </h1>
            
            <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Combining tech, marketing, and creativity to solve complex business problems through automation and high-impact digital strategy.
            </p>
            
            <div class="flex flex-wrap gap-4 pt-4">
              <a href="<?php echo home_url('/projects'); ?>" class="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:-translate-y-1 transition-all shadow-lg shadow-primary/20">
                <span class="material-symbols-outlined">visibility</span>
                View Work
              </a>
              <a href="<?php echo home_url('/contact'); ?>" class="bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-accent hover:text-slate-900 hover:border-accent transition-all">
                <span class="material-symbols-outlined">mail</span>
                Contact Me
              </a>
            </div>
          </div>

          <div class="relative group perspective-1000">
            <div class="absolute -inset-4 bg-gradient-to-tr from-accent to-primary rounded-2xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div class="relative aspect-square rounded-2xl overflow-hidden bg-accent dark:bg-surface-dark border-8 border-white dark:border-surface-dark shadow-2xl transform transition-transform duration-500 group-hover:rotate-1">
              <img 
                src="https://placehold.co/1000x1000/D2F646/151022?text=Yamikani+Banda" 
                alt="Yamikani Banda"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="absolute -bottom-6 -left-6 bg-white dark:bg-surface-dark p-4 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-3 animate-bounce duration-[3000ms]">
                <div class="bg-accent/20 text-slate-900 p-2 rounded-lg">
                    <span class="material-symbols-outlined">code</span>
                </div>
                <div>
                    <p class="text-xs text-slate-500 font-bold uppercase">System Architect</p>
                    <p class="font-bold text-slate-900 dark:text-white">Full Stack Ready</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Competencies -->
      <section class="py-20 bg-white dark:bg-surface-dark/50 border-y border-slate-100 dark:border-white/5">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex justify-between items-end mb-10">
                <h2 class="text-3xl font-display font-bold">Core Competencies</h2>
                <a href="<?php echo home_url('/skills'); ?>" class="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Full Skill Map <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Competency Items would be looped here in a real WP theme, hardcoded for demo -->
                <div class="p-6 rounded-2xl bg-background-light dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all group">
                    <div class="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-slate-900 transition-all">
                        <span class="material-symbols-outlined">terminal</span>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Technical</h3>
                    <div class="flex flex-col gap-2">
                        <span class="self-start px-2 py-1 bg-primary text-white text-[10px] font-black uppercase rounded shadow-sm">Advanced</span>
                        <span class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Make.com, Glide, Framer, Figma</span>
                    </div>
                </div>
                <div class="p-6 rounded-2xl bg-background-light dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all group">
                    <div class="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-slate-900 transition-all">
                        <span class="material-symbols-outlined">globe</span>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Web & Digital</h3>
                    <div class="flex flex-col gap-2">
                        <span class="self-start px-2 py-1 bg-primary text-white text-[10px] font-black uppercase rounded shadow-sm">Intermediate</span>
                        <span class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">React, UI/UX Design, CSS Architecture</span>
                    </div>
                </div>
                <div class="p-6 rounded-2xl bg-background-light dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all group">
                    <div class="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-slate-900 transition-all">
                        <span class="material-symbols-outlined">trending_up</span>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Marketing</h3>
                    <div class="flex flex-col gap-2">
                        <span class="self-start px-2 py-1 bg-primary text-white text-[10px] font-black uppercase rounded shadow-sm">Advanced</span>
                        <span class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Content Strategy, Brand Growth, Analytics</span>
                    </div>
                </div>
                <div class="p-6 rounded-2xl bg-background-light dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all group">
                    <div class="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-slate-900 transition-all">
                        <span class="material-symbols-outlined">settings_suggest</span>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Automation</h3>
                    <div class="flex flex-col gap-2">
                        <span class="self-start px-2 py-1 bg-primary text-white text-[10px] font-black uppercase rounded shadow-sm">Advanced</span>
                        <span class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Workflow Optimization, Zapier, API Integrations</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-20 px-6">
        <div class="max-w-5xl mx-auto bg-primary text-white rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-center grid-bg">
            <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-0"></div>
            <div class="relative z-10 flex flex-col items-center gap-6">
                <span class="material-symbols-outlined text-6xl opacity-50">handshake</span>
                <h2 class="text-3xl md:text-5xl font-black">Ready to build something efficient?</h2>
                <p className="text-white/80 text-lg max-w-2xl">
                    Whether it's an automation workflow or a full digital platform, let's architect a solution that scales.
                </p>
                <a href="<?php echo home_url('/contact'); ?>" class="mt-4 bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent hover:text-slate-900 hover:scale-105 transition-all shadow-xl">
                    Let's Build It
                </a>
            </div>
        </div>
      </section>
  </div>
  `;
  folder.file("front-page.php", `<?php get_header(); ?>\n${homeHtml}\n<?php get_footer(); ?>`);
  
  // Generic Index fallback
  folder.file("index.php", `<?php get_header(); ?>\n<div class="py-20 px-6 text-center max-w-4xl mx-auto">
      <h1 class="text-4xl font-black mb-4"><?php the_title(); ?></h1>
      <div class="prose dark:prose-invert mx-auto"><?php the_content(); ?></div>
  </div>\n<?php get_footer(); ?>`);

  // Generate Zip
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, "yamikani-portfolio-theme.zip");
};
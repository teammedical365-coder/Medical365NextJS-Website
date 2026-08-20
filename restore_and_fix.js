const fs = require('fs');

// Restore HeaderRaw.html
const templateHtml = fs.readFileSync('../template.html', 'utf-8');
const headerMatch = templateHtml.match(/(<header[\s\S]*?<\/header>)/);
if (headerMatch) {
    fs.writeFileSync('src/components/HeaderRaw.html', headerMatch[1]);
}

// Restore FooterRaw.html
const footerMatch = templateHtml.match(/(<footer[\s\S]*?<\/footer>)/);
if (footerMatch) {
    fs.writeFileSync('src/components/FooterRaw.html', footerMatch[1]);
}

// Restore page.html
const indexHtml = fs.readFileSync('../index.html', 'utf-8');
const mainMatchIndex = indexHtml.match(/<\/header>([\s\S]*?)<footer[^>]*id="mega-footer"/);
if (mainMatchIndex) {
    fs.writeFileSync('src/app/page.html', mainMatchIndex[1]);
}

// Restore static pages
const staticPages = ['about', 'pricing', 'contact', 'book-demo'];
for (const page of staticPages) {
    if (fs.existsSync(`../${page}.html`)) {
        const content = fs.readFileSync(`../${page}.html`, 'utf-8');
        const mainMatch = content.match(/<\/header>([\s\S]*?)<footer[^>]*id="mega-footer"/);
        if (mainMatch) {
            fs.writeFileSync(`src/app/${page}/main.html`, mainMatch[1]);
        }
    }
}

// Restore blogs
const blogsDir = '../blogs';
if (fs.existsSync(blogsDir)) {
    const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.html'));
    for (const file of files) {
        const content = fs.readFileSync(`${blogsDir}/${file}`, 'utf-8');
        let mainContent = '';
        const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
        const headerFooterMatch = content.match(/<\/header>([\s\S]*?)<footer[^>]*id="mega-footer"/i);
        if (mainMatch) mainContent = mainMatch[1];
        else if (headerFooterMatch) mainContent = headerFooterMatch[1];
        
        if (mainContent) {
            const slug = file.replace('.html', '');
            if (fs.existsSync(`src/app/blogs/${slug}`)) {
                fs.writeFileSync(`src/app/blogs/${slug}/main.html`, mainContent);
            }
        }
    }
}

// Now safely run the replacements
const filesToFix = [
    'src/components/HeaderRaw.html',
    'src/components/FooterRaw.html',
    'src/app/page.html',
    'src/app/[slug]/main.html',
    'src/app/about/main.html',
    'src/app/pricing/main.html',
    'src/app/contact/main.html',
    'src/app/book-demo/main.html'
];
// add all blog main.html
const blogSlugs = fs.readdirSync('src/app/blogs');
for (const slug of blogSlugs) {
    if (fs.existsSync(`src/app/blogs/${slug}/main.html`)) {
        filesToFix.push(`src/app/blogs/${slug}/main.html`);
    }
}

for (const file of filesToFix) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        
        // Strip .html
        content = content.replace(/href="((?!http)[^"]+)\.html"/g, 'href="/$1"');
        
        // Strip absolute domain
        content = content.replace(/https:\/\/www\.medical365\.in\//g, '/');
        
        // Fix images
        content = content.replace(/src="([^"]+\.(jpg|png|svg|webp))"/g, (match, p1) => {
            if (p1.startsWith('http') || p1.startsWith('/')) {
                return match;
            }
            return `src="/${p1}"`;
        });
        
        fs.writeFileSync(file, content);
    }
}
console.log('Restored files and fixed links safely.');

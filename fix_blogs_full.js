const fs = require('fs');

let content = fs.readFileSync('../blogs.html', 'utf-8');
const headerFooterMatch = content.match(/<\/header>([\s\S]*?)<footer[^>]*id="mega-footer"/i);

if (headerFooterMatch) {
    let mainContent = headerFooterMatch[1];
    
    // Fix links and images
    mainContent = mainContent.replace(/href="((?!http)[^"]+)\.html"/g, 'href="/$1"');
    mainContent = mainContent.replace(/href="((?!http|#|\/)[^"]+)"/g, (match, p1) => {
        if (p1 === 'blogs' || p1.startsWith('blogs/')) {
            return `href="/${p1}"`;
        }
        return `href="/${p1}"`;
    });
    mainContent = mainContent.replace(/https:\/\/www\.medical365\.in\//g, '/');
    mainContent = mainContent.replace(/src="([^"]+\.(jpg|png|svg|webp))"/g, (match, p1) => {
        if (p1.startsWith('http') || p1.startsWith('/')) return match;
        return `src="/${p1}"`;
    });
    
    fs.writeFileSync(`src/app/blogs/main.html`, mainContent);
    console.log('Successfully re-extracted full blogs content including hero and controls.');
} else {
    console.log('Could not find header/footer boundary.');
}

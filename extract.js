const fs = require('fs');

let content = fs.readFileSync('../seo_template.html', 'utf-8');
const bodyMatch = content.match(/<\/header>([\s\S]*?)<footer[^>]*id="mega-footer"/i);
if (bodyMatch) {
    let mainContent = bodyMatch[1];
    
    // Fix relative links
    mainContent = mainContent.replace(/href="((?!http|#|\/)[^"]+)\.html"/g, 'href="/$1"');
    mainContent = mainContent.replace(/href="((?!http|#|\/)[^"]+)"/g, (match, p1) => {
        return `href="/${p1}"`;
    });
    mainContent = mainContent.replace(/https:\/\/www\.medical365\.in\//g, '/');
    mainContent = mainContent.replace(/src="([^"]+\.(jpg|png|svg|webp))"/g, (match, p1) => {
        if (p1.startsWith('http') || p1.startsWith('/')) return match;
        return `src="/${p1}"`;
    });
    
    fs.writeFileSync('src/app/[slug]/main.html', mainContent);
    console.log('Successfully re-extracted full seo_template body including seo-footer. Length: ' + mainContent.length);
} else {
    console.log('Could not find header/footer boundary in seo_template.html.');
}

const fs = require('fs');

function fixLinks(filePath) {
    let html = fs.readFileSync(filePath, 'utf-8');
    
    html = html.replace(/href="([^"\/#][^"]*)"/g, (match, p1) => {
        if (p1.startsWith('http') || p1.startsWith('mailto:') || p1.startsWith('tel:')) {
            return match;
        }
        return `href="/${p1}"`;
    });
    
    fs.writeFileSync(filePath, html);
    console.log(`Fixed links in ${filePath}`);
}

fixLinks('src/components/HeaderRaw.html');
fixLinks('src/components/FooterRaw.html');

const fs = require('fs');

function fixLinks(filePath) {
    let html = fs.readFileSync(filePath, 'utf-8');
    
    // Replace href="something" with href="/something" IF it doesn't start with /, http, #, or mailto
    html = html.replace(/href="([^"\/#h][^"]*)"/g, (match, p1) => {
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

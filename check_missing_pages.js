const fs = require('fs');

const header = fs.readFileSync('src/components/HeaderRaw.html', 'utf-8');
const links = [...header.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
const uniqueLinks = [...new Set(links)].filter(l => l !== '/' && !l.startsWith('http') && !l.startsWith('#') && l !== 'about' && l !== 'pricing' && l !== 'contact' && l !== 'book-demo' && l !== 'blogs');

console.log("Missing static pages from Header:");
uniqueLinks.forEach(l => {
    if (fs.existsSync(`../${l}.html`)) {
        console.log(`- ${l}.html`);
    } else {
        console.log(`- NOT FOUND IN ROOT: ${l}.html`);
    }
});

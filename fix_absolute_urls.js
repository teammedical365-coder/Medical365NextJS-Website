const fs = require('fs');

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

for (const file of filesToFix) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        content = content.replace(/https:\/\/www\.medical365\.in\//g, '/');
        fs.writeFileSync(file, content);
    }
}
console.log('Fixed absolute URLs');

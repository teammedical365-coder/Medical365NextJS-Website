const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf-8');
const content = fs.readFileSync('../seo_template.html', 'utf-8');

const styleMatches = content.match(/<style>([\s\S]*?)<\/style>/g);
if (styleMatches) {
    for (const sm of styleMatches) {
        const rawCss = sm.replace(/<\/?style>/g, '');
        // Ignore the header/menu hotfixes which are already in globals.css
        if (!rawCss.includes('Audit Hotfixes')) {
            // Also ignore generic root vars if they clash, but these are scoped mostly to hero/seo sections
            css += `\n/* Extracted from seo_template.html */\n` + rawCss;
        }
    }
}

fs.writeFileSync('src/app/globals.css', css);
console.log('Appended seo_template styles to globals.css');

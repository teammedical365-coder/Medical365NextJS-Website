const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf-8');

const regex = /\/\* .*?solutions accordion .*?\*\//;
const match = css.match(regex);

if (match) {
    const startIndex = match.index;
    const hotfixesIndex = css.indexOf('Audit Hotfixes');
    
    if (hotfixesIndex !== -1) {
        // find the start of the audit hotfixes comment
        const actualHotfixesStart = css.lastIndexOf('/*', hotfixesIndex);
        
        let before = css.substring(0, startIndex);
        let middle = css.substring(startIndex, actualHotfixesStart);
        let after = css.substring(actualHotfixesStart);
        
        css = before + '\n@media (max-width: 1199px) {\n' + middle + '\n}\n' + after;
        fs.writeFileSync('src/app/globals.css', css);
        console.log('Wrapped mobile mega menu css in media query');
    }
} else {
    console.log('Could not find solutions accordion comment');
}

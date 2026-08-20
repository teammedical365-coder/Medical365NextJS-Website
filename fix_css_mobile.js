const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf-8');

// Find where "solutions accordion" starts
const startIndex = css.indexOf('/* 📱 solutions accordion 📱 */');

// Wrap it in @media (max-width: 1199px)
if (startIndex !== -1) {
    // Let's just wrap everything from that point until the Audit Hotfixes in a media query
    const hotfixesIndex = css.indexOf('/* Audit Hotfixes — Stabilising Mobile & Mega Menu */');
    if (hotfixesIndex !== -1) {
        let before = css.substring(0, startIndex);
        let middle = css.substring(startIndex, hotfixesIndex);
        let after = css.substring(hotfixesIndex);
        
        // Remove the existing media queries if any inside middle to avoid nesting issues or just wrap the whole thing
        css = before + '\n@media (max-width: 1199px) {\n' + middle + '\n}\n' + after;
        fs.writeFileSync('src/app/globals.css', css);
        console.log('Wrapped mobile mega menu css in media query');
    }
}

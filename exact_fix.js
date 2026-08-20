const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf-8');

// 1. Fix overflow: hidden
css = css.replace('.header-container { overflow: hidden !important; }', '.header-container { overflow: visible !important; }');

// 2. Wrap only the specific mega menu mobile block
// The block starts with "/* 📱 solutions accordion 📱 */" or similar. We know the classes are:
// .has-mega-menu { position: static; }
// .mega-menu { position: static !important; ... }
// .mega-menu.active-mobile { ... }
// .mega-menu::-webkit-scrollbar { ... }
// .mega-menu::-webkit-scrollbar-thumb { ... }
// .mega-menu-inner { ... }

// Let's just find ".has-mega-menu {\n        position: static;\n        /* cancel desktop relative */\n    }"
const searchStr = `.has-mega-menu {
        position: static;
        /* cancel desktop relative */
    }`;

if (css.includes(searchStr)) {
    // Let's replace the whole block by finding where it ends.
    // It ends right before ".hero-title { font-size: clamp(2.25rem, 10vw, 3.5rem);"
    const endStr = `.hero-title {`;
    const startIndex = css.indexOf(searchStr);
    const endIndex = css.indexOf(endStr, startIndex);
    
    if (startIndex !== -1 && endIndex !== -1) {
        let blockToWrap = css.substring(startIndex, endIndex);
        let newBlock = `@media (max-width: 1199px) {\n    ` + blockToWrap + `\n}\n\n`;
        css = css.substring(0, startIndex) + newBlock + css.substring(endIndex);
        fs.writeFileSync('src/app/globals.css', css);
        console.log('Fixed exactly the mega menu mobile CSS');
    } else {
        console.log('Could not find end index');
    }
} else {
    console.log('Could not find searchStr');
}

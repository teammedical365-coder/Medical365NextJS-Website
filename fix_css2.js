const fs = require('fs');

const globalCss = fs.readFileSync('../global-styles.css', 'utf-8');
const redesignCss = fs.readFileSync('../redesign.css', 'utf-8');
const pricingCss = fs.readFileSync('../pricing.css', 'utf-8');

const templateHtml = fs.readFileSync('../template.html', 'utf-8');
let inlineStyles = '';
const styleMatches = templateHtml.matchAll(/<style>([\s\S]*?)<\/style>/g);
for (const match of styleMatches) {
    inlineStyles += match[1] + '\n';
}

const finalCss = `
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ================== GLOBAL STYLES ================== */
${globalCss}

/* ================== REDESIGN STYLES ================== */
${redesignCss}

/* ================== PRICING STYLES ================== */
${pricingCss}

/* ================== INLINE STYLES ================== */
${inlineStyles}
`;

fs.writeFileSync('src/app/globals.css', finalCss);
console.log('Merged all CSS correctly.');

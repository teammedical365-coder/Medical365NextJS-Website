const fs = require('fs');
const path = require('path');

let mainHtml = fs.readFileSync('src/app/[slug]/main.html', 'utf-8');
const sampleHtml = fs.readFileSync('../clinic-management-system-jaipur.html', 'utf-8');

// Find the related links grid in the sample HTML
// It usually starts with <ul class="mf-loc-grid"> or similar, wait, what is the wrapper?
const linksMatch = sampleHtml.match(/(<div class="mf-row mf-row-loc"[\s\S]*?)<!-- Global Footer -->/i);
if (linksMatch) {
    console.log("Found the block");
} else {
    // Let's look for the actual replacement string in the generated HTML
    // Wait, the template has `<section class="related-circles-section"` and then `{{related_links_menu}}`.
    // Let's capture the inside of that section.
    const sectionMatch = sampleHtml.match(/<section class="related-circles-section"[^>]*>([\s\S]*?)<\/section>/i);
    if (sectionMatch) {
        // We want to extract the links part, which is after the `<p>Navigate Medical365's complete...`
        const linksHtmlMatch = sectionMatch[1].match(/<\/p>\s*<\/div>\s*([\s\S]*?)\s*<\/div>/i);
        if (linksHtmlMatch) {
            console.log("Found links HTML length: " + linksHtmlMatch[1].length);
            mainHtml = mainHtml.replace('{{related_links_menu}}', linksHtmlMatch[1]);
            fs.writeFileSync('src/app/[slug]/main.html', mainHtml);
            console.log('Replaced {{related_links_menu}} in main.html');
        } else {
            console.log("Could not find links HTML block");
        }
    } else {
        console.log("Could not find related-circles-section");
    }
}

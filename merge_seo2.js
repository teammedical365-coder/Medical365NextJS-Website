const fs = require('fs');

const seoData = JSON.parse(fs.readFileSync('../seo_pages.json', 'utf-8'));
const currentDataWrap = JSON.parse(fs.readFileSync('src/data/pages.json', 'utf-8'));
const currentData = currentDataWrap.PAGES;

const existingSlugs = new Set(currentData.map(p => p.slug));

let count = 0;
for (const seo of seoData) {
    if (existingSlugs.has(seo.url_slug)) continue;
    
    currentData.push({
        slug: seo.url_slug,
        location: seo.location || 'Rajasthan',
        feature: seo.feature || 'Hospital Management Software',
        h1: seo.h1_heading || '',
        meta_title: seo.meta_title || '',
        meta_desc: seo.meta_description || '',
        faq: []
    });
    count++;
}

fs.writeFileSync('src/data/pages.json', JSON.stringify(currentDataWrap, null, 2));
console.log(`Added ${count} pages. Total is now ${currentData.length}`);

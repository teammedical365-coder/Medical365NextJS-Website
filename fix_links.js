const fs = require('fs');
const path = require('path');

// 1. Copy images
fs.copyFileSync('../medical365fav.jpg', 'public/medical365fav.jpg');
fs.copyFileSync('../medical365logo1.png', 'public/medical365logo1.png');
fs.copyFileSync('../doctor_using_tablet_jaipur_1777267686585.png', 'public/doctor_using_tablet_jaipur_1777267686585.png');
fs.copyFileSync('../jaipur_clinic_dashboard_1777267669141.png', 'public/jaipur_clinic_dashboard_1777267669141.png');
fs.copyFileSync('../operational-dashboard.png', 'public/operational-dashboard.png');

// Copy for favicon
fs.copyFileSync('../medical365fav.jpg', 'src/app/icon.jpg');

// 2. Fix .html links in components and pages
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
        
        // Fix standard .html links: href="pricing.html" -> href="/pricing"
        content = content.replace(/href="([^"]+)\.html"/g, 'href="/"');
        
        // The original code had href="https://www.medical365.in/..." we might want to keep external links, 
        // but wait, the regex href="([^"]+)\.html" will match href="https://.../pricing.html" which is fine (becomes /pricing or keeps domain if we don't start with http).
        // Actually, if it's href="https://www.medical365.in/pricing.html", it becomes href="/https://www.medical365.in/pricing". That's bad.
        // Let's refine the regex: href="((?!http)[^"]+)\.html"
        
        // Let's just do it manually and safely
        content = content.replace(/href="((?!http)[^"]+)\.html"/g, 'href="/"');
        
        // Also fix relative image paths if any are just "medical365fav.jpg" -> "/medical365fav.jpg"
        content = content.replace(/src="([^"]+\.(jpg|png|svg|webp))"/g, (match, p1) => {
            if (p1.startsWith('http') || p1.startsWith('/')) {
                return match;
            }
            return src="/";
        });
        
        fs.writeFileSync(file, content);
    }
}
console.log('Fixed images and links');

const fs = require('fs');
let code = fs.readFileSync('src/app/[slug]/page.tsx', 'utf-8');
code = code.replace(
    'const testimonial = data.TESTIMONIALS[page.testimonial_idx];', 
    'const testimonial = data.TESTIMONIALS[page.testimonial_idx || 0];'
);
fs.writeFileSync('src/app/[slug]/page.tsx', code);
console.log('Fixed undefined testimonial index');

const fs = require('fs');

const content = fs.readFileSync('../blogs.html', 'utf-8');
const match = content.match(/<style>\s*(:root[\s\S]*?)<\/style>/i);
if (match) {
    let css = fs.readFileSync('src/app/globals.css', 'utf-8');
    const toAppend = `\n/* Blog Hub missing CSS from inline style */\n` + match[1];
    css += toAppend;
    fs.writeFileSync('src/app/globals.css', css);
    console.log('Appended ALL blog inline styles to globals.css');
} else {
    // If not matching :root, maybe it's just the style block
    const allStyles = content.match(/<style>([\s\S]*?)<\/style>/g);
    let appended = false;
    let css = fs.readFileSync('src/app/globals.css', 'utf-8');
    for (const style of allStyles) {
        if (style.includes('.posts-grid')) {
            const rawCss = style.replace(/<\/?style>/g, '');
            css += `\n/* Blog Hub missing CSS */\n` + rawCss;
            appended = true;
        }
    }
    if (appended) {
        fs.writeFileSync('src/app/globals.css', css);
        console.log('Appended blog hub CSS to globals.css');
    } else {
        console.log('Could not find .posts-grid in <style>');
    }
}

const fs = require('fs');

const cssToAppend = `
/* ----------------------------------------------------
   Blog Hub Specific Styles 
---------------------------------------------------- */
.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}
.related-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,102,204,0.10);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}
.related-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 48px rgba(0,102,204,0.16);
}
.related-card-top {
  background: linear-gradient(135deg, #0066cc 0%, #0ea5e9 100%);
  height: 6px;
}
.related-card-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.related-card-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #0066cc;
  margin-bottom: 8px;
}
.related-card h3 {
  font-size: 0.97rem;
  font-weight: 700;
  color: #1a1a2e;
  line-height: 1.4;
  margin-bottom: 10px;
  font-family: 'Figtree', sans-serif;
}
.related-card p {
  font-size: 0.85rem;
  color: #6b7280;
  line-height: 1.55;
  flex: 1;
  margin-bottom: 16px;
}
.related-card a {
  color: #0066cc;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
}
.related-card a:hover { text-decoration: underline; }
`;

let css = fs.readFileSync('src/app/globals.css', 'utf-8');
if (!css.includes('.related-grid')) {
    css += '\n' + cssToAppend;
    fs.writeFileSync('src/app/globals.css', css);
    console.log('Appended blog hub CSS to globals.css');
}

import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `LIMS Laboratory Software India | Auto Reports | Medical365`,
  description: `Medical365 LIMS — lab analyzer integration, auto-reports & direct EMR sync. ABDM compliant laboratory software for Indian hospitals. Book free demo.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/lims/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Dental Treatment Planning Software India | ABDM | Medical365`,
  description: `Medical365 Dental Treatment Planning Software creates multi-visit plans, cost estimates & consent forms. ABDM compliant dental EMR India. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/dental-treatment-planning/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

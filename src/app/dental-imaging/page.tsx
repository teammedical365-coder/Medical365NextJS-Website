import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Dental EHR Software India | Tooth Chart & Billing | Medical365`,
  description: `Medical365 Dental EHR — tooth chart, treatment planning, imaging & insurance billing. ABDM compliant dental practice software for India. Book free demo.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/dental-imaging/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

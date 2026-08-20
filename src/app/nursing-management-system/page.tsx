import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Nursing Management System Software India | ABDM | Medical365`,
  description: `Medical365 Nursing Management System tracks vitals, care plans & shift handovers for Indian hospital wards. ABDM & NABH compliant. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/nursing-management-system/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

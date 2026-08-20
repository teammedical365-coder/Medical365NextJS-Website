import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Dermatology Treatment Plan Software | EMR India | Medical365`,
  description: `Medical365 Dermatology EMR — before/after photo storage, treatment plans & cosmetic procedure records. ABDM compliant. Book free demo for your clinic.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/dermatology-treatment-plans/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

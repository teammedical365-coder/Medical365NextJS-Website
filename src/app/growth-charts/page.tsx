import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Pediatric Growth Chart Software India | BMI Tracking | Medical365`,
  description: `Medical365 Pediatric Growth Chart Software tracks BMI, height & weight with WHO standards. ABDM compliant pediatrics EMR for India. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/growth-charts/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

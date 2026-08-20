import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Antenatal Care Records Software India | OB/GYN EMR | Medical365`,
  description: `Medical365 Antenatal Care Records manage pregnancy visits, ultrasound reports & delivery planning. ABDM compliant OB/GYN EMR for India. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/antenatal-care-records/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

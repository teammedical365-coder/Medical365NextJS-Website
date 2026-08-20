import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Dental Tooth Chart Software India | Odontogram & EMR | Medical365`,
  description: `Medical365 Dental Tooth Chart (Odontogram) tracks procedures per tooth, supports imaging & insurance billing. ABDM compliant dental EMR India. Book free demo.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/dental-tooth-chart/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

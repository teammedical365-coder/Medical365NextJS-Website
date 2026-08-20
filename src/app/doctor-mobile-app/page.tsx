import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Doctor Mobile App India | ABDM Compliant | Medical365`,
  description: `Medical365 Doctor Mobile App: Cloud-based app for doctors to manage OPD, prescriptions &amp; patient records on-the-go. ABDM compliant. Trusted by 500+ hospitals. Book demo.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/doctor-mobile-app/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

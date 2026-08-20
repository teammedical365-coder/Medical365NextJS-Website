import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Telemedicine Software India | Secure HD Video | Medical365`,
  description: `Medical365 Telemedicine — secure HD video OPD, WhatsApp consults & digital prescriptions for Indian hospitals. ABDM compliant. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/telemedicine/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

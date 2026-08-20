import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Patient Portal Software India | Self-Service Healthcare | Medical365`,
  description: `Medical365 Patient Portal — self-service appointment booking, report downloads & bill payments for Indian hospitals. ABDM compliant. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/patient-portal/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

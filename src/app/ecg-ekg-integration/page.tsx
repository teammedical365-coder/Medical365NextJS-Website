import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `ECG EKG Integration Software India | Cardiology EMR | Medical365`,
  description: `Medical365 ECG/EKG Integration auto-links results to patient EMR records. Real-time cardiology data for Indian hospitals. ABDM compliant. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/ecg-ekg-integration/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Cardiac Risk Scoring Software India | ECG & EMR | Medical365`,
  description: `Medical365 Cardiac Risk Scoring software calculates Framingham, GRACE & TIMI scores within EMR. ABDM compliant cardiology solution for Indian hospitals. Free demo.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/cardiac-risk-scoring/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

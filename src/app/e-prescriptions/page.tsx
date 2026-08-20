import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `E-Prescription Software India | ABDM Compliant | Medical365`,
  description: `Medical365 e-Prescription software — ABDM compliant digital prescriptions with drug database & pharmacy integration. Paperless clinic solution. Free demo.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/e-prescriptions/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

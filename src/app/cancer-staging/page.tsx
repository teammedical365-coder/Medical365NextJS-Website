import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Cancer Staging Software India | Oncology EMR | Medical365`,
  description: `Medical365 Cancer Staging Software supports TNM classification, chemotherapy plans & oncology reports. ABDM compliant for Indian hospitals. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/cancer-staging/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

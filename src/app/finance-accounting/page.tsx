import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Finance and Accounting | Medical365`,
  description: `Discover Medical365's Finance and Accounting solutions. Streamline your healthcare operations, enhance patient care, and improve efficiency with our advanced cloud-based hospital management system and EHR platform.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/finance-accounting/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Hospital Billing & Invoicing Software India | GST Ready | Medical365`,
  description: `Automate hospital billing with Medical365 — GST-compliant invoicing, TPA billing & revenue reports. NABH ready. Trusted by 500+ facilities. Free demo.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/billing-invoicing/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

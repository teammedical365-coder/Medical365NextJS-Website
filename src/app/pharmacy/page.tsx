import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Pharmacy Management Software India | Inventory & Billing | Medical365`,
  description: `Medical365 Pharmacy Management — real-time expiry tracking, e-prescription fulfillment & auto PO generation. Integrated HMS for India. Free demo available.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/pharmacy/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

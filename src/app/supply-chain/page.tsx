import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Hospital Supply Chain Management Software India | Medical365`,
  description: `Medical365 Supply Chain Management tracks procurement, vendor management & inventory for Indian hospitals. ABDM compliant HMS. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/supply-chain/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Hospital Revenue Cycle Management Software India | RCM | Medical365`,
  description: `Medical365 RCM Software automates billing, TPA claims & financial reporting for Indian hospitals. Reduce revenue leakage by 15%. ABDM compliant. Free demo.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/revenue-cycle-management/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

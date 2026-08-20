import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Hospital Queue Token Management Software India | Medical365`,
  description: `Medical365 Queue & Token Management reduces OPD wait times by 40% with smart token display & WhatsApp alerts. ABDM compliant India. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/queue-token-management/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

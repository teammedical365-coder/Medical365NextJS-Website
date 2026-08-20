import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Healthcare CRM Software India | ABDM Ready | Medical365`,
  description: `Medical365 Healthcare CRM: Acquire, retain and engage patients with AI-driven communication, feedback &amp; care coordination. ABDM compliant. Trusted by 500+ hospitals. Book demo.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/crm/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Blood Bank Software India | NABH &amp; ABDM Ready | Medical365`,
  description: `Medical365 Blood Bank Software: Complete blood inventory management, cross-matching &amp; NABH compliance for Indian hospitals. Trusted by 500+ facilities. Book demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/blood-bank/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

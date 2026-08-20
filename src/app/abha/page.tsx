import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `ABHA Compliance Software India | ABDM Ready | Medical365`,
  description: `Medical365 ABHA compliance software: seamlessly integrate ABDM APIs, link patient health IDs, and meet MoHFW standards. Trusted by 500+ hospitals across India. Book a free demo.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/abha/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

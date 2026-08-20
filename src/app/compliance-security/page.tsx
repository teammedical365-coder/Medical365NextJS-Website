import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Compliance & Security | Medical365 - ABDM, DPDP & ISO 27001 Certified`,
  description: `Technical details of Medical365's security architecture. Detailed compliance with ABDM M1, M2, M3 milestones, DPDP Act 2023, and global ISO 27001 certification.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/compliance-security/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

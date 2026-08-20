import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Inpatient Management Software India | IPD System | Medical365`,
  description: `Medical365 IPD Software manages bed allocation, ward rounds, OT scheduling & discharge for Indian hospitals. NABH & ABDM compliant. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/inpatient/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

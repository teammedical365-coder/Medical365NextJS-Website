import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Outpatient Management Software India | OPD System | Medical365`,
  description: `Medical365 OPD Software manages appointments, EMR, billing & queue for Indian clinics. ABDM compliant outpatient system. Trusted by 500+ facilities. Free demo.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/outpatient/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Hospital HRMS Software India | Staff Management | Medical365`,
  description: `Medical365 Hospital HRMS manages staff attendance, payroll, duty rosters & HR compliance for Indian hospitals. ABDM compliant. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/hrms/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

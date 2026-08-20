import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Operation Theater Management Software India | OT | Medical365`,
  description: `Medical365 OT Management Software schedules surgeries, tracks instruments & manages OT workflows for Indian hospitals. NABH compliant. Book free demo.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/operation-theater-management/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

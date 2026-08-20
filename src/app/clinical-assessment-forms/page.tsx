import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Clinical Assessment Forms Software India | EMR | Medical365`,
  description: `Medical365 Clinical Assessment Forms — drag-and-drop builder with PHQ-9, GAD-7, MMSE & 20+ validated tools. ABDM compliant EMR India. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/clinical-assessment-forms/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

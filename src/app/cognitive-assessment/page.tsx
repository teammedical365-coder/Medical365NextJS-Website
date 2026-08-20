import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Cognitive Assessment Software India | Neurology EMR | Medical365`,
  description: `Medical365 Cognitive Assessment Software includes MMSE, MoCA & custom neuro forms within EMR. ABDM compliant neurology solution India. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/cognitive-assessment/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

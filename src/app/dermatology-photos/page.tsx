import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Dermatology Before After Photo Software India | EMR | Medical365`,
  description: `Medical365 Dermatology Photo Software stores before/after images, tracks skin conditions & treatment progress. ABDM compliant dermatology EMR. Book free demo.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/dermatology-photos/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

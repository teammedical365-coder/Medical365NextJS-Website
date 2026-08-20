import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Fertility Treatment Tracking Software India | IVF EMR | Medical365`,
  description: `Medical365 Fertility Treatment Tracking manages IVF cycles, hormone charts & embryo records. ABDM compliant gynecology EMR for India. Book free demo today.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/fertility-treatment-tracking/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

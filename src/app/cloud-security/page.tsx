import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Data Security & Cloud Access | Medical365`,
  description: `Discover Medical365's Data Security & Cloud Access solutions. Streamline your healthcare operations, enhance patient care, and improve efficiency with our advanced cloud-based hospital management system and EHR platform.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/cloud-security/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

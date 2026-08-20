import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Stroke Management Templates | Medical365`,
  description: `Discover Medical365's Stroke Management Templates solutions. Streamline your healthcare operations, enhance patient care, and improve efficiency with our advanced cloud-based hospital management system and EHR platform.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/stroke-management/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

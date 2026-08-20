import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Data Migration, Backup & Recovery | Medical365`,
  description: `Discover Medical365's Data Migration, Backup & Recovery solutions. Streamline your healthcare operations, enhance patient care, and improve efficiency with our advanced cloud-based hospital management system and EHR platform.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/data-migration/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

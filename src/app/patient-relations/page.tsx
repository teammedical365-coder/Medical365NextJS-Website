import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Marketing and Patient Relations | Medical365`,
  description: `Discover Medical365's Marketing and Patient Relations solutions. Streamline your healthcare operations, enhance patient care, and improve efficiency with our advanced cloud-based hospital management system and EHR platform.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/patient-relations/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

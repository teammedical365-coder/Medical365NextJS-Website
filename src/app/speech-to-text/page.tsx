import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Speech to Text | Medical365`,
  description: `Discover Medical365's Speech to Text solutions. Streamline your healthcare operations, enhance patient care, and improve efficiency with our advanced cloud-based hospital management system and EHR platform.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/speech-to-text/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

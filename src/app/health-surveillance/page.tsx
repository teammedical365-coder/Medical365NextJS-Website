import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Real-Time Health Surveillance | Medical365`,
  description: `Discover Medical365's Real-Time Health Surveillance solutions. Streamline your healthcare operations, enhance patient care, and improve efficiency with our advanced cloud-based hospital management system and EHR platform.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/health-surveillance/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

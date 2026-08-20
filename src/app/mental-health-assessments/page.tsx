import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Mental Health Assessments | Medical365`,
  description: `Discover Medical365's Mental Health Assessments solutions. Streamline your healthcare operations, enhance patient care, and improve efficiency with our advanced cloud-based hospital management system and EHR platform.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/mental-health-assessments/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

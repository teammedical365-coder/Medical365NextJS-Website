import fs from 'fs';
import path from 'path';

export const metadata = {
  title: `Lipid Profile Tracking | Medical365`,
  description: `Discover Medical365's Lipid Profile Tracking solutions. Streamline your healthcare operations, enhance patient care, and improve efficiency with our advanced cloud-based hospital management system and EHR platform.`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/lipid-profile-tracking/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

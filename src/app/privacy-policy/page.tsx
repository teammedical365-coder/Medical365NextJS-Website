import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'privacy policy | Medical365',
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/privacy-policy/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

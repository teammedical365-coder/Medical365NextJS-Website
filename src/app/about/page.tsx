import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'about | Medical365',
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/about/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'Insights & Blogs | Medical365',
  description: 'Read the latest insights and blogs from Medical365.',
};

export default function BlogsPage() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/blogs/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

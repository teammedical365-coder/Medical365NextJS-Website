
import React from 'react';
import fs from 'fs';
import path from 'path';

export default function Medical365VsPractoBlogPage() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'src/app/blogs/medical365-vs-practo/main.html'), 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

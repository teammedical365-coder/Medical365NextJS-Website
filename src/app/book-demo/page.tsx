
import React from 'react';
import fs from 'fs';
import path from 'path';

export default function BookDemoPage() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'src/app/book-demo/main.html'), 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

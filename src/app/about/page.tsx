
import React from 'react';
import fs from 'fs';
import path from 'path';

export default function AboutPage() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'src/app/about/main.html'), 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

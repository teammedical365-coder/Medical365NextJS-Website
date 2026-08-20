
import React from 'react';
import fs from 'fs';
import path from 'path';

export default function BestDentalSoftwareIndiaBlogPage() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'src/app/blogs/best-dental-software-india/main.html'), 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

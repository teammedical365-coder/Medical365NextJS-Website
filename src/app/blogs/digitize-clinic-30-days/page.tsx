
import React from 'react';
import fs from 'fs';
import path from 'path';

export default function DigitizeClinic30DaysBlogPage() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'src/app/blogs/digitize-clinic-30-days/main.html'), 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

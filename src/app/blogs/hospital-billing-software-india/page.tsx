
import React from 'react';
import fs from 'fs';
import path from 'path';

export default function HospitalBillingSoftwareIndiaBlogPage() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'src/app/blogs/hospital-billing-software-india/main.html'), 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

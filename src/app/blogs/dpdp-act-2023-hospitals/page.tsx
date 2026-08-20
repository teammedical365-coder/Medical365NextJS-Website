
import React from 'react';
import fs from 'fs';
import path from 'path';

export default function DpdpAct2023HospitalsBlogPage() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'src/app/blogs/dpdp-act-2023-hospitals/main.html'), 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

import React from 'react';
import fs from 'fs';
import path from 'path';

export default function Header() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'src/components/HeaderRaw.html'), 'utf-8');
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

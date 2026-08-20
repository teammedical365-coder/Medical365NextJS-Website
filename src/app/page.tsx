import React from 'react';
import { readFileSync } from 'fs';
import path from 'path';

export default function Home() {
  // Normally we wouldn't use dangerouslySetInnerHTML for the whole page, 
  // but this is a temporary step during migration.
  
  // Wait, fs is not available on client. This is a Server Component, so fs works.
  const htmlContent = readFileSync(path.join(process.cwd(), 'src/app/page.html'), 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

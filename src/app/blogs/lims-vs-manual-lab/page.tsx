
import React from 'react';
import fs from 'fs';
import path from 'path';

export default function LimsVsManualLabBlogPage() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'src/app/blogs/lims-vs-manual-lab/main.html'), 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

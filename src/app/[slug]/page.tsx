import data from '@/data/pages.json';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export function generateStaticParams() {
  return data.PAGES.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> | { slug: string } }): Promise<Metadata> {
  const resolvedParams = await params;
  const page = data.PAGES.find((p) => p.slug === resolvedParams.slug);
  if (!page) return {};
  
  return {
    title: page.meta_title,
    description: page.meta_desc,
  };
}

export default async function PseoPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = await params;
  const page = data.PAGES.find((p) => p.slug === resolvedParams.slug);

  if (!page) {
    notFound();
  }

  const testimonial = data.TESTIMONIALS[page.testimonial_idx || 0];
  
  // Read the raw HTML file and replace the variables manually server-side
  let html = fs.readFileSync(path.join(process.cwd(), 'src/app/[slug]/main.html'), 'utf-8');
  
  html = html.replace(/\{\{h1_heading\}\}/g, page.h1 || '');
  html = html.replace(/\{\{location\}\}/g, page.location || '');
  html = html.replace(/\{\{feature\}\}/g, page.feature || '');
  html = html.replace(/\{\{location_slug\}\}/g, (page.location || '').toLowerCase().replace(/ /g, "-"));

  html = html.replace(/\{\{testimonial_quote\}\}/g, testimonial.quote || '');
  html = html.replace(/\{\{testimonial_avatar_initials\}\}/g, testimonial.initials || '');
  html = html.replace(/\{\{testimonial_name\}\}/g, testimonial.name || '');
  html = html.replace(/\{\{testimonial_role\}\}/g, testimonial.role || '');

  html = html.replace(/\{\{faq1_question\}\}/g, page.faq?.[0]?.[0] || '');
  html = html.replace(/\{\{faq1_answer\}\}/g, page.faq?.[0]?.[1] || '');
  html = html.replace(/\{\{faq2_question\}\}/g, page.faq?.[1]?.[0] || '');
  html = html.replace(/\{\{faq2_answer\}\}/g, page.faq?.[1]?.[1] || '');
  html = html.replace(/\{\{faq3_question\}\}/g, page.faq?.[2]?.[0] || '');
  html = html.replace(/\{\{faq3_answer\}\}/g, page.faq?.[2]?.[1] || '');

  // Generate related links
  const featurePages = data.PAGES.filter(p => p.feature === page.feature && p.slug !== page.slug).slice(0, 15);
  const locationPages = data.PAGES.filter(p => p.location === page.location && p.slug !== page.slug).slice(0, 15);

  let relatedHtml = `<div class="strong-internal-links" style="padding: 0;">`;
  
  // Section A
  relatedHtml += `
      <div style="margin-bottom: 48px;">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom: 20px; border-bottom: 2px solid #1A56DB; padding-bottom: 12px;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="color:#37B39C;flex-shrink:0;" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <h3 style="font-size:1.2rem; font-weight:800; color:#1A56DB; margin:0;">${page.feature} - Available Across Rajasthan</h3>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 8px 24px;">`;
  
  for (const fp of featurePages) {
      relatedHtml += `<a href="/${fp.slug}" style="display:flex;align-items:center;gap:6px;color:#374151;text-decoration:none;font-size:0.875rem;padding:6px 0;border-bottom:1px solid #F3F4F6;transition:color 0.15s;" onmouseover="this.style.color='#1A56DB'" onmouseout="this.style.color='#374151'"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg> ${fp.feature} in ${fp.location}</a>`;
  }
  
  relatedHtml += `</div></div>`;
  
  // Section B
  relatedHtml += `
      <div style="margin-bottom: 48px;">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom: 20px; border-bottom: 2px solid #0D9488; padding-bottom: 12px;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="color:#1A56DB;flex-shrink:0;" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <h3 style="font-size:1.2rem; font-weight:800; color:#0D9488; margin:0;">More Healthcare Solutions in ${page.location}</h3>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 8px 24px;">`;
          
  for (const lp of locationPages) {
      relatedHtml += `<a href="/${lp.slug}" style="display:flex;align-items:center;gap:6px;color:#374151;text-decoration:none;font-size:0.875rem;padding:6px 0;border-bottom:1px solid #F3F4F6;transition:color 0.15s;" onmouseover="this.style.color='#1A56DB'" onmouseout="this.style.color='#374151'"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg> ${lp.feature} in ${lp.location}</a>`;
  }
  
  relatedHtml += `</div></div></div>`;
  
  html = html.replace(/\{\{related_links_menu\}\}/g, relatedHtml);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}

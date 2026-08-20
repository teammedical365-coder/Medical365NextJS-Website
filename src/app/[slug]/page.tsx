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

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = data.PAGES.find((p) => p.slug === params.slug);
  if (!page) return {};
  
  return {
    title: page.meta_title,
    description: page.meta_desc,
  };
}

export default function PseoPage({ params }: { params: { slug: string } }) {
  const page = data.PAGES.find((p) => p.slug === params.slug);

  if (!page) {
    notFound();
  }

  const testimonial = data.TESTIMONIALS[page.testimonial_idx];
  
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

  html = html.replace(/\{\{faq1_question\}\}/g, page.faq[0][0] || '');
  html = html.replace(/\{\{faq1_answer\}\}/g, page.faq[0][1] || '');
  html = html.replace(/\{\{faq2_question\}\}/g, page.faq[1][0] || '');
  html = html.replace(/\{\{faq2_answer\}\}/g, page.faq[1][1] || '');
  html = html.replace(/\{\{faq3_question\}\}/g, page.faq[2][0] || '');
  html = html.replace(/\{\{faq3_answer\}\}/g, page.faq[2][1] || '');

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}

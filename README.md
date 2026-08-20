# Medical365 Next.js Application

A blazing-fast, modern Next.js application for Medical365. This repository contains the complete Next.js migration of the original programmatic SEO (pSEO) engine, transforming 1,150+ static HTML pages into a dynamic, highly performant React architecture.

## Features

- **Programmatic SEO Engine:** Automatically generates 70+ location/software specific landing pages using generateStaticParams.
- **Next.js App Router:** Built on Next.js 14+ using the latest App Router paradigm for optimal routing and layouts.
- **Centralized Data:** All location configurations, FAQs, and testimonials are driven from a single src/data/pages.json source of truth.
- **Static Generation:** Pages are statically built (SSG) at compile time for maximum performance and SEO indexing.
- **Unified Layout:** Consistent Header and Footer components applied globally via layout.tsx.

## Getting Started

First, run the development server:

\\\ash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\\\

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- \src/app/page.tsx\: The main homepage.
- \src/app/[slug]/page.tsx\: The dynamic pSEO route engine.
- \src/app/blogs/[slug]/page.tsx\: The dynamic blog route.
- \src/data/pages.json\: The configuration database driving the programmatic pages.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

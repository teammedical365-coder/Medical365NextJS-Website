import './globals.css';
import Script from 'next/script';
import ScriptRunner from '../components/ScriptRunner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Medical365',
  description: 'Hospital Management Software',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
        <Script src="/global-scripts.js" strategy="lazyOnload" />
        <ScriptRunner />
      </body>
    </html>
  );
}

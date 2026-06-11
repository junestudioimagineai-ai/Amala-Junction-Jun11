import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import ScrollToTop from './ScrollToTop';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50">
      <ScrollToTop />
      <Header />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

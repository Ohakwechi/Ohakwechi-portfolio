import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import ProjectGrid from '@/app/components/ProjectGrid';
import About from '@/app/components/About';
import Contact from '@/app/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <About />
      <Contact />
      <footer className="py-10 text-center border-t border-slate-900 text-slate-600 text-sm">
        &copy; {new Date().getFullYear()} Chigozie Ohakwechi. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}
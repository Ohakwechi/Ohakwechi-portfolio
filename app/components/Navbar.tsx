    import { Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          DevPortfolio
        </span>
        <div className="hidden md:flex gap-8 text-sm text-white font-medium">
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
        <a href="mailto:your@email.com" className="md:hidden text-slate-400"><Mail size={20} /></a>
      </div>
    </nav>
  );
}
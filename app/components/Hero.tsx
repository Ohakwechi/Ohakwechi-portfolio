import Image from 'next/image';
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
          Hi, I&apos;m <span className="text-blue-500">OHAKWECHI</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg">
          A Software Engineer building high-performance web apps, 
          from secure systems to real-time navigation tools.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a href="#" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500 transition-all text-slate-400 hover:text-white"><Github size={20}/></a>
          <a href="#" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500 transition-all text-slate-400 hover:text-white"><Linkedin size={20}/></a>
          <a href="mailto:your@email.com" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500 transition-all text-slate-400 hover:text-white"><Mail size={20}/></a>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative h-56 w-56 md:h-72 md:w-72 overflow-hidden rounded-full border-4 border-slate-900 shadow-2xl">
          <Image src="/my-photo.jpg" alt="Profile" fill className="object-cover" priority />
        </div>
      </div>
    </section>
  );
}
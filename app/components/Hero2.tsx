import Image from 'next/image';
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-20 max-w-5xl mx-auto px-6">
      {/* Text Side */}
      <div className="flex-1 order-2 md:order-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Hi, I&apos;m <span className="text-blue-500">CHIGOZIE OHAKWE</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg">
          A Software Engineer focused on building high-performance web apps, 
          from secure school management systems to real-time navigation tools.
        </p>
        
        <div className="flex justify-center md:justify-start gap-5">
          <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-all text-white">
            <Github size={22} />
          </a>
          <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-400 transition-all text-white">
            <Twitter size={22} />
          </a>
          <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-700 transition-all text-white">
            <Linkedin size={22} />
          </a>
          <a href="mailto:your@email.com" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-500 transition-all text-white">
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 order-1 md:order-2 flex justify-center">
        <div className="relative">
          {/* Decorative Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-full border-4 border-slate-900 shadow-2xl">
            <Image 
              src="/my-photo.jpg" 
              alt="ohakwechi Profile Photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
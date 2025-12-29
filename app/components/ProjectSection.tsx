import React from 'react';
import { ExternalLink, Code, Layers, Shield, GraduationCap, Map, Library } from "lucide-react";

// 1. The Data Array
const projects = [
  {
    title: "Bloom",
    description: "A teacher/school owner connection app featuring full authentication, protected routes, and a seamless sign-up flow.",
    tech: ["Next.js", "Auth.js", "PostgreSQL"],
    icon: <GraduationCap className="text-pink-400" size={20} />,
    link: "#"
  },
  {
    title: "My Road App",
    description: "A real-time, API-driven application providing live updates and dynamic data streaming for travelers.",
    tech: ["React", "Rest API", "Google Maps"],
    icon: <Map className="text-emerald-400" size={20} />,
    link: "#"
  },
  {
    title: "Dreambox Academy Dashboard",
    description: "A comprehensive management dashboard designed for academy oversight, featuring data visualization and progress tracking.",
    tech: ["Next.js", "Tailwind", "Recharts"],
    icon: <Layers className="text-blue-400" size={20} />,
    link: "#"
  },
  {
    title: "Design System",
    description: "A professional component library built for scalability and UI consistency across multiple platforms.",
    tech: ["TypeScript", "Storybook", "Tailwind"],
    icon: <Library className="text-purple-400" size={20} />,
    link: "#"
  },
  {
    title: "Backup",
    description: "A secure, multi-step sign-up form tailored for security personnel onboarding with strict data validation.",
    tech: ["Zod", "React Hook Form", "Framer Motion"],
    icon: <Shield className="text-orange-400" size={20} />,
    link: "#"
  }
];

// 2. The Component
export default function ProjectGrid() {
  return (
    <section className="py-12 max-w-5xl mx-auto px-6">
      <div className="flex items-center gap-3 mb-12">
        <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <Code className="text-white" size={24} />
        </div>
        <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300 shadow-xl"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-2 bg-slate-800 rounded-lg">
                {project.icon}
              </div>
              <a 
                href={project.link} 
                className="text-slate-500 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
              {project.tech.map((t) => (
                <span 
                  key={t} 
                  className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold bg-blue-500/5 text-blue-400 rounded border border-blue-500/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
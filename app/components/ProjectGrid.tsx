import { ExternalLink, Code, Layers, Shield, GraduationCap, Map, Library } from "lucide-react";

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

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto px-6 text-white">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <Code className="text-blue-500" /> Featured Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="group p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all flex flex-col">
            <div className="flex justify-between mb-6">
              <div className="p-2 bg-slate-800 rounded-lg">{p.icon}</div>
              <a href={p.link} className="text-slate-500 hover:text-white"><ExternalLink size={18}/></a>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400">{p.title}</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">{p.description}</p>
            <div className="flex flex-wrap gap-2 text-white">
              {p.tech.map(t => <span key={t} className="text-[10px] px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
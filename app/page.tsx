import { Github, Twitter, Mail } from "lucide-react";
import ProjectSection from "./components/ProjectSection";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 p-8 md:p-24">
      {/* Hero Section */}
      <section className="max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
         {` Hi, I'm OHAKWECHI`}
        </h1>
        <p className="text-lg text-slate-400">
         {` I am a Software Engineer dedicated to building applications that bridge the gap between complex logic and seamless user experiences.

My work ranges from architecting centralized design systems to developing secure, multi-step onboarding flows for high-stakes industries like security. I thrive on the challenge of integrating real-time APIs and building robust authentication systems that keep data safe and accessible.

Whether it's connecting teachers through Bloom or visualizing data for Dreambox Academy, I focus on writing scalable code that solves real-world problems.
        `}</p>
        
        <div className="flex gap-4 mt-6">
          <a href="https://github.com/yourusername" className="hover:text-blue-400"><Github /></a>
          <a href="https://twitter.com/yourusername" className="hover:text-blue-400"><Twitter /></a>
          <a href="mailto:youremail@example.com" className="hover:text-blue-400"><Mail /></a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-2xl mx-auto">
       
      </section>
      <ProjectSection />
    </main>
  );
}
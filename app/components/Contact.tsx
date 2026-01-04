export default function Contact() {
  return (
    <section id="contact" className="py-32 text-center px-6">
      <div className="max-w-xl mx-auto p-10 bg-gradient-to-b from-blue-600/10 to-transparent border border-blue-500/20 rounded-3xl">
        <h2 className="text-3xl font-bold mb-4 text-white">Let&apos;s build something together.</h2>
        <p className="text-slate-400 mb-8">Currently open to new projects and full-time opportunities.</p>
        <a href="mailto:chigozieohakwej@gmail.com" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-xl shadow-blue-500/20">
          Get In Touch
        </a>
      </div>
    </section>
  );
}
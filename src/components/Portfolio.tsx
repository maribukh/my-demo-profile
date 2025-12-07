import { FaGithub } from "react-icons/fa";

export default function Portfolio() {
  const projects = [
    {
      title: "Music Store API",
      category: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
      desc: "E-commerce backend with Node.js, Express and PostgreSQL.",
      stack: ["Node.js", "PostgreSQL", "Express"],
      link: "https://github.com/maribukh/music-store-backend",
    },
    {
      title: "User Management",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      desc: "Admin dashboard for managing users with role-based access.",
      stack: ["React", "TypeScript", "Tailwind"],
      link: "https://github.com/maribukh/user-management-app_itransition",
    },
    {
      title: "MB Academy Platform",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      desc: "Modern educational platform with i18n and dark mode.",
      stack: ["React", "Vite", "Supabase"],
      link: "https://github.com/maribukh/my-demo-profile",
    },
  ];

  return (
    <section
      id="portfolio"
      className="container mx-auto px-4 py-20 bg-[#08080C]"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center font-orbitron text-white mb-12">
        Selected <span className="text-neonPink">Works</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative bg-[#0A0A0F] border border-white/10 rounded-2xl overflow-hidden hover:border-neonPink/50 transition-all duration-300"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-xs font-bold text-neonPink uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white font-orbitron mt-1">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub size={20} />
                </a>
              </div>

              <p className="text-sm text-gray-400 font-body mb-4 line-clamp-2">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-white/5 rounded text-gray-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

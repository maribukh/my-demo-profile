import { FaGithub, FaExternalLinkAlt, FaUsers } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import btuImg from "../assets/projects/btu-mockup.png.jpeg";
import musicImg from "../assets/projects/music-mockup.png.jpeg";
export default function Portfolio() {
  const { language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "Inventory Management",
      category: "Business Automation",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
      links: {
        github: "https://github.com/maribukh/inventory-project_ITransition",
        live: null,
      },
      stack: ["React", "Node.js", "PostgreSQL", "Material UI", "TailWindCSS"],
      desc: {
        en: "Full-stack inventory system. I implemented real-time CRUD operations for stock tracking, automated calculations, and responsive dashboard UI.",
        ka: "ინვენტარის მართვის სისტემა. განვახორციელე CRUD ოპერაციები მარაგების აღრიცხვისთვის და ავტომატური კალკულაციები.",
        ru: "Система управления инвентарем. Реализовала CRUD операции для отслеживания стоков, автоматические расчеты и адаптивный UI.",
      },
    },
    {
      id: 2,
      title: "BTU Final Project",
      category: "Team Collaboration",
      isGroup: true,
      image: btuImg,
      links: {
        github: "https://github.com/Ruska-N/Final-Project-BTU",
        live: "https://final-project-btu.vercel.app/",
      },
      stack: ["Angular", "TypeScript", "SCSS", "Git Flow"],
      desc: {
        en: "E-commerce Group Project. I developed Contact & FAQ modules, implemented Gift Card logic, managed JSON data structure, and handled Git merge conflicts.",
        ka: "ელ-კომერციის ჯგუფური პროექტი. შევქმენი კონტაქტისა და FAQ გვერდები, დავნერგე სასაჩუქრე ბარათები, ვმართავდი მონაცემთა სტრუქტურას და Git-ის პროცესებს.",
        ru: "Групповой E-commerce проект. Разработала модули Contact и FAQ, логику подарочных карт. Управляла структурой данных (JSON) и слиянием веток в Git.",
      },
    },
    {
      id: 3,
      title: "Music Store API",
      category: "Backend Architecture",
      image: musicImg,
      links: {
        github: "https://github.com/maribukh/music-store-backend",
        live: null,
      },
      stack: ["Node.js", "Express", "PostgreSQL", "Sequelize"],
      desc: {
        en: "Scalable RESTful API for music streaming. I designed the database schema, implemented complex SQL relationships, and secured endpoints with JWT.",
        ka: "მასშტაბირებადი RESTful API. შევქმენი მონაცემთა ბაზის სქემა, განვახორციელე რთული SQL კავშირები და დავიცავი სისტემა JWT ავტორიზაციით.",
        ru: "Масштабируемый RESTful API. Спроектировала схему БД, реализовала сложные SQL связи и защитила эндпоинты с помощью JWT.",
      },
    },
    {
      id: 4,
      title: "User Control System",
      category: "Full Stack App",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      links: {
        github: "https://github.com/maribukh/user-management-app_itransition",
        live: "https://user-management-app-itransition.vercel.app/",
      },
      stack: ["React", "TailWindCSS", "Node.js", "MySQL"],
      desc: {
        en: "Admin dashboard with Role-Based Access Control (RBAC). Features bulk user actions, status management, and secure authentication flow.",
        ka: "სადმინისტრაციო პანელი როლებზე დაფუძნებული წვდომით (RBAC). მოიცავს მომხმარებლების ჯგუფურ მართვას და უსაფრთხო ავტორიზაციას.",
        ru: "Админ-панель с контролем доступа (RBAC). Реализованы массовые действия с пользователями и безопасная авторизация.",
      },
    },
  ];

  return (
    <section id="portfolio" className="container mx-auto px-4 py-20 relative">
      <div className="absolute top-20 left-0 w-72 h-72 bg-neonBlue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-6">
          {language === "ka"
            ? "რჩეული"
            : language === "ru"
            ? "Избранные"
            : "Selected"}{" "}
          <span className="text-neonPink">
            {language === "ka"
              ? "ნამუშევრები"
              : language === "ru"
              ? "Работы"
              : "Works"}
          </span>
        </h2>
        <p className="text-lg text-gray-400 font-body">
          {language === "ka"
            ? "პროექტები, რომლებიც აჩვენებენ ჩემს გამოცდილებას Frontend, Backend და გუნდურ მუშაობაში."
            : language === "ru"
            ? "Проекты, демонстрирующие мой опыт во Frontend, Backend и командной разработке."
            : "Projects showcasing my expertise in Frontend, Backend, and collaborative teamwork."}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative z-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-[#0A0A0F] border border-white/10 rounded-2xl overflow-hidden hover:border-neonPink/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,0,170,0.15)] flex flex-col h-full"
          >
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-neonPink uppercase tracking-wider font-orbitron">
                  {project.category}
                </span>
                {project.isGroup && (
                  <span className="px-3 py-1 bg-neonBlue/20 backdrop-blur-md border border-neonBlue/50 rounded-full text-xs font-bold text-neonBlue uppercase tracking-wider font-orbitron flex items-center gap-2">
                    <FaUsers /> Team
                  </span>
                )}
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white font-orbitron leading-tight group-hover:text-neonBlue transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      title="View Code"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-neonBlue transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-gray-300 font-body mb-6 leading-relaxed flex-grow">
                {project.desc[language]}
              </p>

              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-[11px] uppercase font-bold tracking-wider bg-white/5 rounded text-gray-300 border border-white/10 font-orbitron"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

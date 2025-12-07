import { useState } from "react";
import { academyData } from "../data/academyData";
import { useLanguage } from "../context/LanguageContext";
import bgMain from "../assets/bg-main.jpg";

import {
  FaUniversity,
  FaCertificate,
  FaCode,
  FaChevronDown,
  FaCheck,
  FaBriefcase,
  FaGithub,
} from "react-icons/fa";

const getIconForTitle = (title: string) => {
  const lowerCaseTitle = title.toLowerCase();
  if (
    lowerCaseTitle.includes("bachelor") ||
    lowerCaseTitle.includes("university")
  ) {
    return <FaUniversity className="text-neonBlue" />;
  }
  if (
    lowerCaseTitle.includes("mentorship") ||
    lowerCaseTitle.includes("react") ||
    lowerCaseTitle.includes("front-end")
  ) {
    return <FaCode className="text-neonPink" />;
  }
  return <FaCertificate className="text-neonPurple" />;
};

export default function AboutInstructor() {
  const { language, t } = useLanguage();
  const { instructor } = academyData[language];
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section
      id="about"
      className="relative container mx-auto px-4 py-16 sm:py-24 z-10"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] -z-10 pointer-events-none opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${bgMain})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle, black 30%, transparent 70%)",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,#00F0FF,#BC13FE,#FF00AA,#00F0FF)] blur-md opacity-80"></div>
            <div className="relative w-[96%] h-[96%] rounded-full p-1 overflow-hidden z-10">
              {instructor.imageUrl ? (
                <img
                  alt={instructor.name}
                  src={instructor.imageUrl}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span>Photo</span>
                </div>
              )}
            </div>
          </div>

          <h2 className="mt-8 text-4xl md:text-5xl font-bold tracking-widest font-orbitron text-white drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
            {instructor.name}
          </h2>
          <p className="mt-2 text-lg text-neonBlue font-semibold tracking-wider font-orbitron">
            {instructor.title}
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-base text-gray-300/90 leading-relaxed font-body">
            {instructor.bio}
          </p>
        </div>

        <div className="my-16">
          <h3 className="text-2xl md:text-3xl font-bold tracking-widest mb-8 font-orbitron text-white">
            {t.instructor.expTitle}
          </h3>
          <div className="text-left space-y-6">
            {instructor.experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-neonBlue/50 transition-colors duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4">
                      <FaBriefcase className="text-3xl text-neonBlue flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-white font-orbitron">
                          {exp.title}
                        </h4>
                        <p className="text-base font-semibold text-neonBlue font-body">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-300/80 font-body">
                      {exp.description}
                    </p>
                  </div>
                  <div className="md:col-span-1 md:border-l md:border-white/10 md:pl-6">
                    <h5 className="text-sm font-semibold text-white mb-3 font-orbitron">
                      {t.instructor.skills}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.keySkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-neonBlue/10 text-neonBlue border border-neonBlue/20 font-body"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {exp.projects && (
                      <div className="mt-4">
                        <h5 className="text-sm font-semibold text-white mb-3 font-orbitron">
                          {t.instructor.projects}
                        </h5>
                        <div className="space-y-2">
                          {exp.projects.map((project) => (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              key={project.name}
                              className="flex items-center gap-2 text-sm text-gray-300 hover:text-neonBlue transition-colors duration-200 font-body"
                            >
                              <FaGithub />
                              {project.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-12 h-px bg-white/10 w-3/4 mx-auto"></div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-widest mb-8 font-orbitron text-white">
            {t.instructor.eduTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left items-start">
            {instructor.educationHistory.map((item) => {
              const isExpanded = expandedCardId === item.id;

              const borderClass = isExpanded
                ? "border-neonBlue shadow-[0_0_15px_rgba(0,240,255,0.2)] bg-gradient-to-b from-[#0A0A0F] to-[#0A0A0F]/80"
                : "border-white/10 hover:border-white/30 bg-white/5";

              return (
                <div
                  key={item.id}
                  className={`
                    relative rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer
                    ${borderClass}
                  `}
                  onClick={() => handleCardClick(item.id)}
                >
                  <div className="p-5 relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 text-2xl flex-shrink-0 transition-colors duration-300">
                          {getIconForTitle(item.title)}
                        </div>
                        <div>
                          <h4
                            className={`font-semibold transition-colors duration-300 font-orbitron ${
                              isExpanded ? "text-neonBlue" : "text-white"
                            }`}
                          >
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-400 font-body">
                            {item.source}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 font-body">
                            {item.period}
                          </p>
                        </div>
                      </div>
                      <FaChevronDown
                        className={`mt-1 text-white/50 flex-shrink-0 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-neonBlue" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isExpanded
                          ? "max-h-96 opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-white/10 pt-4">
                        <h5 className="text-sm font-semibold text-white mb-2 font-orbitron">
                          {t.instructor.skills}:
                        </h5>
                        <ul className="space-y-2">
                          {item.keySkills.map((skill) => (
                            <li
                              key={skill}
                              className="flex items-center gap-2 text-xs text-gray-300 font-body"
                            >
                              <FaCheck className="text-neonBlue" size={12} />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="absolute inset-0 bg-neonBlue/5 pointer-events-none"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

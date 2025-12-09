import { useState } from "react";
import { academyData } from "../data/academyData";
import { useLanguage } from "../context/LanguageContext";
import bgMain from "../assets/bg-main.jpg";
import {
  FaUniversity,
  FaCertificate,
  FaCode,
  FaChevronDown,
  FaCheckCircle,
  FaBriefcase,
  FaGithub,
  FaMapMarkerAlt,
  FaGlobe,
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

  const cvFile =
    language === "ka"
      ? "/Mariam_Bukhaidze_CV_KA.pdf" 
      : "/Mariam_Bukhaidze_CV.pdf";   

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
        {/* PHOTO & BIO */}
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

        {/* DOWNLOAD CV BUTTON */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href={cvFile}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-neonBlue text-neonBlue font-orbitron hover:bg-neonBlue hover:text-black transition-all duration-300 group">
              <FaBriefcase className="group-hover:scale-110 transition-transform" />
              {language === "ka"
                ? "ჩამოტვირთე CV"
                : language === "ru"
                ? "Скачать резюме"
                : "Download CV"}
            </button>
          </a>
        </div>

        {/* PROFESSIONAL EXPERIENCE */}
        <div className="my-16 relative">
          <h3 className="text-2xl md:text-3xl font-bold tracking-widest mb-12 font-orbitron text-white">
            {t.instructor.expTitle}
          </h3>

          <div className="absolute left-4 md:left-1/2 top-20 bottom-0 w-px bg-gradient-to-b from-neonBlue/50 via-neonPurple/50 to-transparent -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {instructor.experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#0A0A0F] border-2 border-neonBlue rounded-full -translate-x-1/2 mt-6 z-20 hidden md:block shadow-[0_0_10px_#00F0FF]"></div>

                <div className="flex-1 hidden md:flex justify-start">
                  {index === 0 && (
                    <div className="w-full relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/10 to-transparent rounded-xl blur-lg opacity-50"></div>
                      <div className="relative bg-[#0A0A0F]/60 border border-white/10 rounded-xl p-6 h-full flex flex-col justify-center gap-4 hover:border-white/20 transition-all">
                        <h4 className="text-sm uppercase tracking-widest text-gray-500 font-orbitron mb-2">
                          Current Status
                        </h4>

                        <div className="flex items-center gap-3">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                          </span>
                          <span className="text-white font-semibold font-body">
                            Open to Work / Freelance
                          </span>
                        </div>

                        <div className="w-full h-px bg-white/10"></div>

                        <div className="flex items-center gap-3 text-gray-300">
                          <FaMapMarkerAlt className="text-neonBlue" />
                          <span className="font-body">Tbilisi, Georgia</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-300">
                          <FaGlobe className="text-neonPurple" />
                          <span className="font-body">
                            English, Georgian, Russian
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Left Side: Experience Card */}
                <div className="flex-1 w-full relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/20 to-neonPurple/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative bg-[#0A0A0F]/80 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-neonBlue/50 transition-all duration-300 group-hover:-translate-y-1 shadow-lg">
                    <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
                      <div className="p-3 rounded-lg bg-white/5 text-neonBlue text-xl">
                        <FaBriefcase />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white font-orbitron leading-tight">
                          {exp.title}
                        </h4>
                        <p className="text-sm font-semibold text-neonBlue font-body mt-1">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 font-body leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div>
                      <h5 className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-orbitron">
                        {t.instructor.skills}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.keySkills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-neonBlue/10 text-neonBlue border border-neonBlue/20 font-body shadow-[0_0_5px_rgba(0,240,255,0.1)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {exp.projects && (
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <h5 className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-orbitron">
                          {t.instructor.projects}
                        </h5>
                        <div className="space-y-2">
                          {exp.projects.map((project) => (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              key={project.name}
                              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 font-body group/link"
                            >
                              <FaGithub className="text-gray-500 group-hover/link:text-white transition-colors" />
                              <span className="border-b border-transparent group-hover/link:border-neonBlue transition-all">
                                {project.name}
                              </span>
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

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-3/4 mx-auto"></div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-widest mb-12 font-orbitron text-white">
            {t.instructor.eduTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {instructor.educationHistory.map((item) => {
              const isExpanded = expandedCardId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item.id)}
                  className={`
                    relative group cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500
                    ${
                      isExpanded
                        ? "border-neonBlue/50 bg-[#0A0A0F] shadow-[0_0_30px_rgba(0,240,255,0.1)]"
                        : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                    }
                  `}
                >
                  {/* Decorative Tech Corners */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/10 rounded-tr-lg group-hover:border-neonBlue/50 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/10 rounded-bl-lg group-hover:border-neonBlue/50 transition-colors"></div>

                  <div className="p-6 relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`
                          p-3 rounded-xl text-2xl transition-all duration-300
                          ${
                            isExpanded
                              ? "bg-neonBlue/10 text-neonBlue"
                              : "bg-black/30 text-gray-400 group-hover:text-neonBlue"
                          }
                        `}
                        >
                          {getIconForTitle(item.title)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider font-orbitron">
                              {item.period}
                            </span>
                            {isExpanded && (
                              <span className="flex items-center gap-1 text-xs text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded-full">
                                <FaCheckCircle size={10} /> Verified
                              </span>
                            )}
                          </div>
                          <h4
                            className={`text-lg font-bold font-orbitron mt-1 leading-tight transition-colors ${
                              isExpanded ? "text-white" : "text-gray-200"
                            }`}
                          >
                            {item.title}
                          </h4>
                          <p className="text-sm text-neonBlue font-semibold mt-1 font-body">
                            {item.source}
                          </p>
                        </div>
                      </div>
                      <FaChevronDown
                        className={`text-gray-500 transition-transform duration-500 ${
                          isExpanded ? "rotate-180 text-neonBlue" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100 mt-6"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-4 bg-black/30 rounded-lg border border-white/5">
                          <p className="text-sm text-gray-300 font-body mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <h5 className="text-xs font-bold text-white mb-2 font-orbitron uppercase">
                            Skills Acquired:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {item.keySkills.map((skill) => (
                              <span
                                key={skill}
                                className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10 font-body"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-neonBlue/5 via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
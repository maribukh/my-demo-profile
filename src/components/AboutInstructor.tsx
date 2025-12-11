import { useState, useEffect } from "react";
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
  FaMapMarkerAlt,
  FaClock,
  FaFileDownload,
  FaGlobe,
} from "react-icons/fa";

const getIconForId = (id: number) => {
  if (id === 1) {
    return <FaUniversity className="text-neonBlue" />;
  }
  if ([2, 3, 4, 5].includes(id)) {
    return <FaCode className="text-neonPink" />;
  }
  return <FaCertificate className="text-neonPurple" />;
};

export default function AboutInstructor() {
  const { language, t } = useLanguage();
  const { instructor } = academyData[language];
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleCardClick = (id: number) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  const cvLink = language === "ka" ? "/cv_ge.pdf" : "/cv_en.pdf";

  return (
    <section
      id="about"
      className="relative container mx-auto px-4 py-12 md:py-24 z-10"
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
        <div className="flex flex-col items-center justify-center mb-8 md:mb-10">
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,#00F0FF,#BC13FE,#FF00AA,#00F0FF)] blur-md opacity-80"></div>
            <div className="relative w-[96%] h-[96%] rounded-full  p-1 overflow-hidden z-10">
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

          <h2 className="mt-6 md:mt-8 text-3xl md:text-5xl font-bold tracking-widest font-orbitron text-white drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
            {instructor.name}
          </h2>
          <p className="mt-2 text-base md:text-lg text-neonBlue font-semibold tracking-wider font-orbitron">
            {instructor.title}
          </p>
          <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base text-gray-300/90 leading-relaxed font-body">
            {instructor.bio}
          </p>
        </div>

        <div className="my-12 md:my-16 relative">
          <h3 className="text-2xl md:text-3xl font-bold tracking-widest mb-10 md:mb-12 font-orbitron text-white">
            {t.instructor.expTitle}
          </h3>

          <div className="absolute left-1/2 top-20 bottom-0 w-px bg-gradient-to-b from-neonBlue/50 via-neonPurple/50 to-transparent -translate-x-1/2 hidden md:block"></div>

          <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-neonBlue/30 to-transparent md:hidden"></div>

          <div className="space-y-8 md:space-y-12">
            {instructor.experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-8 items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-1/2 w-4 h-4 bg-[#0A0A0F] border-2 border-neonBlue rounded-full -translate-x-1/2 mt-6 z-20 hidden md:block shadow-[0_0_10px_#00F0FF]"></div>

                <div className="absolute left-6 w-3 h-3 bg-[#0A0A0F] border border-neonBlue rounded-full -translate-x-1/2 mt-6 z-20 md:hidden shadow-[0_0_5px_#00F0FF]"></div>

                <div
                  className={`flex-1 justify-start w-full ${
                    index === 0 ? "flex" : "hidden md:flex"
                  }`}
                >
                  {index === 0 && (
                    <div className="w-full pl-10 md:pl-0 relative group mb-2 md:mb-0">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-neonBlue rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-1000 animate-pulse hidden md:block"></div>

                      <div className="relative bg-[#0A0A0F] border border-white/10 rounded-xl p-5 md:p-6 h-full flex flex-col justify-between hover:border-green-500/50 transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-orbitron mb-1">
                              {t.instructor.status.title}
                            </h4>
                            <div className="flex items-center gap-2">
                              <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-green-500"></span>
                              </span>
                              <span className="text-white font-bold font-orbitron text-base md:text-lg tracking-wide">
                                {t.instructor.status.available}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                              <FaClock className="text-neonBlue" size={10} />
                              <span className="font-mono">{time} (GMT+4)</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 md:space-y-3 mb-5 md:mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                              <FaBriefcase size={12} />
                            </div>
                            <span className="text-gray-300 text-xs md:text-sm font-body">
                              {t.instructor.status.openFor}{" "}
                              <span className="text-white font-semibold">
                                {t.instructor.status.types}
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-neonBlue/10 flex items-center justify-center text-neonBlue">
                              <FaMapMarkerAlt size={12} />
                            </div>
                            <span className="text-gray-300 text-xs md:text-sm font-body">
                              {t.instructor.status.remote}
                            </span>
                          </div>
                        </div>

                        <a
                          href={cvLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 md:py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-neonBlue/50 hover:text-white text-gray-300 flex items-center justify-center gap-2 transition-all group/btn active:scale-95"
                        >
                          <FaFileDownload className="group-hover/btn:scale-110 transition-transform" />
                          <span className="font-orbitron text-xs md:text-sm tracking-wide">
                            {t.instructor.status.downloadCv}
                          </span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex-1 w-full pl-10 md:pl-0 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/20 to-neonPurple/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"></div>

                  <div className="relative bg-[#0A0A0F]/80 backdrop-blur-md border border-white/10 rounded-xl p-5 md:p-6 hover:border-neonBlue/50 transition-all duration-300 md:group-hover:-translate-y-1 shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 border-b border-white/10 pb-4">
                      <div className="self-start sm:self-center p-3 rounded-lg bg-white/5 text-neonBlue text-lg md:text-xl">
                        <FaBriefcase />
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-white font-orbitron leading-tight">
                          {exp.title}
                        </h4>
                        <p className="text-xs md:text-sm font-semibold text-neonBlue font-body mt-1">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 font-body leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div>
                      <h5 className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-3 font-orbitron">
                        {t.instructor.skills}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.keySkills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-[10px] md:text-xs font-medium rounded-full bg-neonBlue/10 text-neonBlue border border-neonBlue/20 font-body"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {exp.projects && (
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <h5 className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-3 font-orbitron">
                          {t.instructor.projects}
                        </h5>
                        <div className="space-y-2">
                          {exp.projects.map((project) => (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              key={project.name}
                              className="flex items-center gap-2 text-xs md:text-sm text-gray-300 hover:text-white transition-colors duration-200 font-body group/link break-all"
                            >
                              <FaGithub className="text-gray-500 group-hover/link:text-white transition-colors flex-shrink-0" />
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

        <div className="my-12 md:my-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-3/4 mx-auto"></div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-widest mb-10 md:mb-12 font-orbitron text-white">
            {t.instructor.eduTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
            {instructor.educationHistory.map((item) => {
              const isExpanded = expandedCardId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item.id)}
                  className={`
                    relative group cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 active:scale-[0.98] md:active:scale-100
                    ${
                      isExpanded
                        ? "border-neonBlue/50 bg-[#0A0A0F] shadow-[0_0_20px_rgba(0,240,255,0.1)]"
                        : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                    }
                  `}
                >
                  <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-white/10 rounded-tr-lg group-hover:border-neonBlue/50 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-white/10 rounded-bl-lg group-hover:border-neonBlue/50 transition-colors"></div>

                  <div className="p-5 md:p-6 relative z-10">
                    <div className="flex items-start justify-between gap-3 md:gap-4">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div
                          className={`
                          p-2.5 md:p-3 rounded-xl text-lg md:text-2xl transition-all duration-300
                          ${
                            isExpanded
                              ? "bg-neonBlue/10 text-neonBlue"
                              : "bg-black/30 text-gray-400 group-hover:text-neonBlue"
                          }
                        `}
                        >
                          {getIconForId(item.id)}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider font-orbitron">
                              {item.period}
                            </span>
                            {isExpanded && (
                              <span className="flex items-center gap-1 text-[10px] md:text-xs text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded-full">
                                <FaCheck size={10} /> Verified
                              </span>
                            )}
                          </div>
                          <h4
                            className={`text-base md:text-lg font-bold font-orbitron mt-1 leading-tight transition-colors ${
                              isExpanded ? "text-white" : "text-gray-200"
                            }`}
                          >
                            {item.title}
                          </h4>
                          <p className="text-xs md:text-sm text-neonBlue font-semibold mt-1 font-body">
                            {item.source}
                          </p>
                        </div>
                      </div>
                      <FaChevronDown
                        className={`text-gray-500 transition-transform duration-500 mt-1 ${
                          isExpanded ? "rotate-180 text-neonBlue" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100 mt-4 md:mt-6"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-3 md:p-4 bg-black/30 rounded-lg border border-white/5">
                          <p className="text-xs md:text-sm text-gray-300 font-body mb-3 md:mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <h5 className="text-[10px] md:text-xs font-bold text-white mb-2 font-orbitron uppercase">
                            Skills Acquired:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {item.keySkills.map((skill) => (
                              <span
                                key={skill}
                                className="text-[10px] md:text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10 font-body"
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

import { useLanguage } from "../context/LanguageContext";
import { FaSearch, FaCode, FaVial, FaRocket } from "react-icons/fa";

export default function Workflow() {
  const { t } = useLanguage();

  const icons = [FaSearch, FaCode, FaVial, FaRocket];

  return (
    <section className="container mx-auto px-4 py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neonBlue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-6">
          {t.workflow.title}{" "}
          <span className="text-neonBlue">{t.workflow.subtitle}</span>
        </h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto z-10">
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {t.workflow.steps.map((step, index) => {
          const Icon = icons[index];
          return (
            <div key={index} className="relative group">
              <div className="w-24 h-24 mx-auto bg-[#0A0A0F] border border-white/20 rounded-full flex items-center justify-center relative z-10 group-hover:border-neonBlue transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <Icon className="text-3xl text-gray-400 group-hover:text-neonBlue transition-colors duration-300" />

                <div className="absolute -top-2 -right-2 w-8 h-8 bg-neonBlue text-black font-bold font-orbitron rounded-full flex items-center justify-center text-sm shadow-[0_0_10px_#00F0FF]">
                  0{index + 1}
                </div>
              </div>

              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-white font-orbitron mb-2 group-hover:text-neonBlue transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 font-body leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>

              {index !== 3 && (
                <div className="md:hidden absolute left-1/2 bottom-[-32px] w-0.5 h-8 bg-white/20 -translate-x-1/2"></div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

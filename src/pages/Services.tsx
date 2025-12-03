import { useState } from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import Button from "../components/UI/Button";
import { FaCheck, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import ServiceOrderModal from "../components/ServiceOrderModal";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { language, t } = useLanguage();
  const currentServices = servicesData[language];

  const [selectedService, setSelectedService] = useState<{
    title: string;
    msg: string;
  } | null>(null);

  const handleCustomOrder = () => {
    setSelectedService({
      title: "Custom Project",
      msg: "Hi Mariam, I have a custom project in mind...",
    });
  };

  return (
    <>
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-6">
              {t.services.title}{" "}
              <span className="text-neonBlue">{t.services.subtitle}</span>
            </h1>
            <p className="text-lg text-gray-300 font-body leading-relaxed">
              {t.services.desc}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {currentServices.map((service) => (
              <div
                key={service.id}
                className={`
                  relative bg-white/5 border rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300
                  flex flex-col
                  ${service.borderColor} hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]
                `}
              >
                <div className={`text-4xl mb-6 ${service.color}`}>
                  <service.icon />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 font-orbitron tracking-wide">
                  {service.title}
                </h3>
                <p className="text-3xl font-bold text-white mb-6 font-orbitron">
                  {service.price}
                </p>

                <p className="text-gray-400 mb-8 flex-grow font-body text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-gray-300 font-body"
                    >
                      <div
                        className={`p-1 rounded-full bg-white/10 ${service.color}`}
                      >
                        <FaCheck size={10} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() =>
                      setSelectedService({
                        title: service.title,
                        msg: service.defaultMessage || "",
                      })
                    }
                  >
                    {t.services.orderBtn}
                  </Button>
                </div>

                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none`}
                ></div>
              </div>
            ))}
          </div>

          {/* Custom Project & Quick Contact Section */}
          <div className="relative bg-[#0A0A0F] border border-neonBlue/30 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neonBlue/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-neonPink/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left max-w-xl">
                <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">
                  {t.services.customProject}
                </h2>
                <p className="text-gray-400 mb-6 text-lg font-body">
                  {t.services.customDesc}
                </p>
                <Button variant="glass" size="lg" onClick={handleCustomOrder}>
                  {t.services.discussBtn}
                </Button>
              </div>

              <div className="w-full h-px bg-white/10 md:hidden"></div>
              <div className="hidden md:block w-px h-32 bg-white/10"></div>

              <div className="flex flex-col items-center gap-4">
                <span className="text-sm font-semibold text-neonBlue uppercase tracking-widest font-orbitron">
                  {t.services.quickChat}
                </span>
                <div className="flex gap-4">
                  <a
                    href="https://t.me/maribukh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#229ED9] hover:border-[#229ED9] hover:shadow-[0_0_15px_#229ED9] transition-all duration-300"
                  >
                    <FaTelegramPlane size={24} />
                  </a>

                  <a
                    href="https://linkedin.com/in/maribukh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_#0A66C2] transition-all duration-300"
                  >
                    <FaLinkedinIn size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceOrderModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        serviceTitle={selectedService?.title || ""}
        defaultMessage={selectedService?.msg || ""}
      />
    </>
  );
}

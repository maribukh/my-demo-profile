import { useState } from "react";
import { servicesData } from "../data/servicesData";
import Button from "./UI/Button";
import { FaCheck } from "react-icons/fa";
import ServiceOrderModal from "./ServiceOrderModal";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./UI/Reveal";

export default function ServicesList() {
  const { language, t } = useLanguage();
  const currentServices = servicesData[language];

  const [selectedService, setSelectedService] = useState<{
    title: string;
    msg: string;
  } | null>(null);

  return (
    <section id="services" className="container mx-auto px-4 py-20">
      <Reveal width="100%">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-6">
            {t.services.title}{" "}
            <span className="text-neonBlue">{t.services.subtitle}</span>
          </h2>
          <p className="text-lg text-gray-300 font-body leading-relaxed">
            {t.services.desc}
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {currentServices.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.1}>
            <div className="h-full pt-2 pb-2 px-1">
              <div
                className={`
                  relative bg-white/5 border rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300
                  flex flex-col h-full
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
            </div>
          </Reveal>
        ))}
      </div>

      <ServiceOrderModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        serviceTitle={selectedService?.title || ""}
        defaultMessage={selectedService?.msg || ""}
      />
    </section>
  );
}

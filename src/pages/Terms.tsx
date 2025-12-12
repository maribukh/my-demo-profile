import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Terms() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-8">
        {t.terms.title}{" "}
        <span className="text-neonBlue">{t.terms.subtitle}</span>
      </h1>

      <div className="space-y-8 text-gray-300 font-body leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-2 font-orbitron">
            {t.terms.general.title}
          </h2>
          <p>{t.terms.general.content}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-2 font-orbitron">
            {t.terms.payments.title}
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {t.terms.payments.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-2 font-orbitron">
            {t.terms.revisions.title}
          </h2>
          <p>{t.terms.revisions.content}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-2 font-orbitron">
            {t.terms.ip.title}
          </h2>
          <p>{t.terms.ip.content}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-2 font-orbitron">
            {t.terms.deadlines.title}
          </h2>
          <p>{t.terms.deadlines.content}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-2 font-orbitron">
            {t.terms.warranty.title}
          </h2>
          <p>{t.terms.warranty.content}</p>
        </section>
      </div>
    </div>
  );
}

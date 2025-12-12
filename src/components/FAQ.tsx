import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="container mx-auto px-4 py-20 max-w-3xl">
      <h2 className="text-3xl font-bold text-center font-orbitron text-white mb-10">
        {t.faq.title}
      </h2>
      <div className="space-y-4">
        {t.faq.items.map((faq, idx) => (
          <div
            key={idx}
            className="bg-[#0A0A0F] border border-white/10 rounded-xl overflow-hidden transition-all hover:border-neonBlue/30"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center p-5 text-left text-white font-orbitron text-lg hover:bg-white/5 transition-colors"
            >
              {faq.q}
              {openIndex === idx ? (
                <FaChevronUp className="text-neonBlue" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 pt-0 text-gray-400 font-body text-base leading-relaxed border-t border-white/5">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../data/translations";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "ka", label: "GE", flag: "🇬🇪" },
    { code: "ru", label: "RU", flag: "🇷🇺" },
  ];

  return (
    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-1 py-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`
            px-2 py-1 rounded-full text-xs font-bold transition-all duration-300
            ${
              language === lang.code
                ? "bg-neonBlue text-black shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                : "text-gray-400 hover:text-white"
            }
          `}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

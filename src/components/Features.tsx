import { useLanguage } from "../context/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  const icons = [
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-neonBlue"
    >
      <path
        d="M12 2L2 7l10 5 10-5-10-5Zm0 7L2 4v13l10 5 10-5V4l-10 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>,
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-neonBlue"
    >
      <path
        d="M4 4h16v4H4V4Zm0 6h10v4H4v-4Zm0 6h16v4H4v-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>,
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-neonBlue"
    >
      <path
        d="M3 20h18M5 16l5-5 4 4 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>,
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-neonBlue"
    >
      <path
        d="M4 5h16v10H4V5Zm0 12h16v2H4v-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>,
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-8 font-orbitron text-white">
        {t.features.title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.features.items.map((f, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:shadow-lg transition"
          >
            <div className="mb-4">{icons[index]}</div>
            <h3 className="text-lg font-bold font-orbitron text-white">
              {f.title}
            </h3>
            <p className="mt-2 text-sm text-[#E0E0E0]/80 font-body leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

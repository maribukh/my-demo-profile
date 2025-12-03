import React, { useState } from "react";
import { academyData } from "../data/academyData";
import { useLanguage } from "../context/LanguageContext";
import { FaGithub, FaEnvelope, FaSpinner, FaCheck } from "react-icons/fa";
import { supabase } from "../supabaseClient";
import Button from "./UI/Button";

export default function Footer() {
  const { language, t } = useLanguage();
  const { instructor } = academyData[language];
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const navLinks = [
    { href: "#courses", label: t.nav.courses },
    { href: "#about", label: t.nav.about },
    { href: "#contacts", label: t.nav.contacts },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document
      .getElementById(href.substring(1))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const { error } = await supabase
        .from("subscribers")
        .insert([{ email: email }]);

      if (error) {
        if (error.code === "23505") {
          alert("This email is already subscribed!");
          setStatus("idle");
        } else {
          throw error;
        }
        return;
      }

      setStatus("success");
      setEmail("");

      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <footer
      id="contacts"
      className="relative mt-20 border-t border-white/10 bg-black overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl opacity-40 animate-aurora"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-orbitron">
          {t.footer.title}
        </h2>
        <p className="mt-4 text-lg text-neutral-300 max-w-xl mx-auto font-body">
          {t.footer.text}
        </p>

        <form
          onSubmit={handleSubscribe}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            required
            disabled={status === "loading" || status === "success"}
            className="flex-grow min-w-0 px-4 py-3 rounded-md bg-white/5 text-white text-base border border-white/10 focus:outline-none focus:ring-2 focus:ring-neonBlue/80 backdrop-blur-sm transition disabled:opacity-50 font-body"
          />
          <Button
            type="submit"
            variant="glass"
            size="lg"
            className="!rounded-md min-w-[140px] flex justify-center items-center"
            disabled={status === "loading" || status === "success"}
          >
            {status === "idle" && t.footer.btnSubscribe}
            {status === "loading" && <FaSpinner className="animate-spin" />}
            {status === "success" && (
              <span className="flex items-center gap-2">
                <FaCheck /> Done
              </span>
            )}
            {status === "error" && "Error"}
          </Button>
        </form>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-neutral-400 text-center sm:text-left font-body">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>

          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm text-neutral-300 hover:text-white transition-colors font-body"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href={instructor.contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-neutral-400 hover:text-white transition-transform hover:scale-110"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={`mailto:${instructor.contact.email}`}
              aria-label="Email"
              className="text-neutral-400 hover:text-white transition-transform hover:scale-110"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

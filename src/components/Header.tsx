import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const nav = [
  { href: "#courses", label: "Courses" },
  { href: "/services", label: "Services" },
  { href: "#about", label: "About Instructor" },
  { href: "#contacts", label: "Contacts" },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href.startsWith("/")) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = href.substring(1);

    if (location.pathname === "/") {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b ${
          isMobileMenuOpen
            ? "bg-[#050505] border-white/10"
            : isScrolled
            ? "bg-[#050505]/90 backdrop-blur-lg border-white/10 shadow-lg shadow-neonBlue/5"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setIsMobileMenuOpen(false);
            }}
            className="text-lg md:text-xl font-bold tracking-widest text-white cursor-pointer font-orbitron z-50"
          >
            MB Dev Academy
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm tracking-wide text-gray-300 hover:text-neonBlue transition-colors cursor-pointer relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neonBlue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-white p-2 focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes size={24} className="text-neonBlue" />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[45] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#0A0A0F] border-l border-white/10 shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-6 pb-6 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-neonBlue/10 rounded-full blur-3xl pointer-events-none"></div>

        <nav className="flex flex-col gap-6 relative z-10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xl font-orbitron text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 border-b border-white/5 pb-4 flex items-center justify-between group"
            >
              {item.label}
              <span className="opacity-0 group-hover:opacity-100 text-neonBlue">
                →
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-auto relative z-10">
          <p className="text-xs text-gray-500 text-center font-orbitron">
            MB Dev Academy © 2025
          </p>
        </div>
      </div>
    </>
  );
}

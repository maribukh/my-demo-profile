import { Link, useNavigate, useLocation } from "react-router-dom";
import type React from "react";

const nav = [
  { href: "#courses", label: "Courses" },
  { href: "/services", label: "Services" },
  { href: "#about", label: "About Instructor" },
  { href: "#contacts", label: "Contacts" },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (href.startsWith("/")) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = href.substring(1);

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="text-lg md:text-xl font-bold tracking-widest text-white cursor-pointer font-orbitron"
        >
          MB Dev Academy
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm tracking-wide text-gray-300 hover:text-neonBlue transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

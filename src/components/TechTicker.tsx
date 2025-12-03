import { FaReact, FaJs, FaGitAlt, FaNodeJs, FaAngular } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiVite,
  SiPostgresql,
} from "react-icons/si";

const techs = [
  { icon: FaReact, name: "React" },
  { icon: FaAngular, name: "Angular" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiSupabase, name: "Supabase" },
  { icon: SiVite, name: "Vite" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaGitAlt, name: "Git" },
];

export default function TechTicker() {
  return (
    <div className="w-full bg-black/40 border-y border-white/5 py-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#050505] to-transparent z-10"></div>

      <div className="flex animate-infinite-scroll w-max hover:[animation-play-state:paused]">
        {[...techs, ...techs, ...techs].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-8 text-gray-400 hover:text-neonBlue transition-colors cursor-default"
          >
            <tech.icon className="text-2xl" />
            <span className="text-lg font-semibold tracking-wide font-orbitron">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

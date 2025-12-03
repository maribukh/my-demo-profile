import { Link } from "react-router-dom";
import type { Course } from "../data/academyData";
import Button from "./UI/Button.tsx";
import { FaClock, FaUsers } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  const { id, title, duration, description, technologies, level, price } =
    course;
  const { t } = useLanguage();

  const levelStyles: { [key: string]: { border: string; text: string } } = {
    Beginner: { border: "border-green-400", text: "text-green-400" },
    Advanced: { border: "border-yellow-400", text: "text-yellow-400" },
    Workshop: { border: "border-purple-400", text: "text-purple-400" },
  };

  const currentLevelStyle = levelStyles[level] || {
    border: "border-gray-400",
    text: "text-gray-400",
  };

  const groupSize =
    level === "Workshop"
      ? `Up to 12 ${t.courses.card.students}`
      : `Up to 5 ${t.courses.card.students}`;

  return (
    <article className="group relative h-full bg-white/5 border border-white/10 rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:border-white/20 will-change-transform">
      <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/10 via-transparent to-neonPink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative p-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between text-xs font-semibold font-orbitron">
          <span
            className={`px-3 py-1 border rounded-full ${currentLevelStyle.border} ${currentLevelStyle.text}`}
          >
            {level}
          </span>
          <span className="flex items-center gap-2 text-gray-400">
            <FaClock />
            {duration}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-white font-orbitron">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-300/80 line-clamp-3 flex-grow font-body">
          {description}
        </p>

        <div className="mt-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-neonBlue font-body">
            <FaUsers />
            {groupSize}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-white/10">
          <h4 className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2 font-orbitron">
            {t.courses.card.tech}
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded bg-white/10 text-gray-300 font-body"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <p className="text-xl font-bold text-white font-orbitron">
            {price} GEL
          </p>
          <Link to={`/course/${id}`}>
            <Button variant="primary" size="md">
              <span>{t.courses.card.details}</span>
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}

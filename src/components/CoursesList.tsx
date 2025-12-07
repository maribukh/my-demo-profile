import { Link } from "react-router-dom";
import { academyData } from "../data/academyData.ts";
import CourseCard from "./CourseCard.tsx";
import Button from "./UI/Button.tsx";
import { useLanguage } from "../context/LanguageContext";

export default function CoursesList() {
  const { language, t } = useLanguage();
  const { courses } = academyData[language];

  return (
    <section id="courses" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-8 text-center font-orbitron text-white">
        {t.courses.title}
      </h2>

      <div className="mb-12 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold font-orbitron text-white mb-3">
          {t.courses.findTitle}
        </h3>
        <p className="mt-2 text-[#E0E0E0]/80 max-w-2xl mx-auto font-body">
          {t.courses.findDesc}
        </p>
        <Link to="/course-finder">
          <Button variant="primary" size="lg" className="mt-6">
            {t.courses.btnFind}
          </Button>
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

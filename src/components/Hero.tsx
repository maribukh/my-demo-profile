import type React from "react";
import Button from "./UI/Button.tsx";

export default function Hero() {
  const scrollToCourses = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToInstructor = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neonBlue/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-4xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-white font-orbitron">
          Become the Front-End Developer of the Future
        </h1>
        <p className="mt-6 text-base md:text-lg text-[#E0E0E0]/80">
          Interactive courses on React and TypeScript from a practicing expert.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" size="lg" onClick={scrollToCourses}>
            View All Courses
          </Button>

          <Button variant="glass" size="lg" onClick={scrollToInstructor}>
            Meet the Instructor
          </Button>
        </div>
      </div>
    </section>
  );
}

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
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-36 md:pt-20 pb-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-neonBlue/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl z-10 relative flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-widest text-white font-orbitron drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] leading-tight mt-4">
          Become the Front-End Developer of the Future
        </h1>

        <p className="mt-6 text-sm md:text-lg text-[#E0E0E0]/80 max-w-xl mx-auto px-2">
          Interactive courses on React and TypeScript from a practicing expert.
          Master the stack that powers the modern web.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col w-full sm:w-auto sm:flex-row justify-center gap-4 px-4">
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToCourses}
            className="w-full sm:w-auto"
          >
            View All Courses
          </Button>

          <Button
            variant="glass"
            size="lg"
            onClick={scrollToInstructor}
            className="w-full sm:w-auto"
          >
            Meet the Instructor
          </Button>
        </div>
      </div>
    </section>
  );
}

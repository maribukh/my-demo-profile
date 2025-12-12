import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TechTicker from "./components/TechTicker";
import NotFound from "./pages/NotFound";
import SEO from "./components/SEO";
import ServicesList from "./components/ServicesList";
import Portfolio from "./components/Portfolio";
import CustomCursor from "./components/UI/CustomCursor";
import Workflow from "./components/Workflow";

const LazyCourseFinder = lazy(() => import("./pages/CourseFinder"));
const LazyCourseDetails = lazy(() => import("./pages/CourseDetails"));
const LazyAboutInstructor = lazy(() => import("./components/AboutInstructor"));

const PageLoadingFallback = () => (
  <div className="flex min-h-[80vh] items-center justify-center">
    <p className="text-2xl text-neonBlue font-orbitron animate-pulse">
      Loading...
    </p>
  </div>
);

const SectionLoadingFallback = () => (
  <div className="flex h-64 items-center justify-center">
    <p className="text-lg text-neonBlue">Loading Section...</p>
  </div>
);

const MainPageLayout = () => (
  <>
    <SEO
      title="Mariam Bukhaidze | Front-End Developer"
      description="Professional web development services. React, TypeScript, and modern UI/UX."
    />
    <Hero />
    <TechTicker />
    <ServicesList />
    <Workflow />
    <Portfolio />
    <Suspense fallback={<SectionLoadingFallback />}>
      <LazyAboutInstructor />
    </Suspense>
    <Features />
  </>
);

function App() {
  useEffect(() => {
    const titleStyle = [
      "color: #00F0FF",
      "background: #0A0A0F",
      "font-size: 20px",
      "padding: 10px",
      "border: 2px solid #00F0FF",
      "border-radius: 5px",
      "font-family: Orbitron, sans-serif",
      "text-shadow: 0 0 10px #00F0FF",
    ].join(";");

    const warningStyle = [
      "color: #E0E0E0",
      "font-size: 14px",
      "font-family: monospace",
      "margin-top: 10px",
    ].join(";");

    console.clear();
    console.log("%cDeveloped by Mariam Bukhaidze | MB Dev Academy", titleStyle);
    console.log(
      "%c⚠️ This code is the intellectual property of Mariam Bukhaidze.\nIf you see this in another portfolio, it has been stolen.\nContact: mariebukhaidze@gmail.com",
      warningStyle
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white md:cursor-none selection:bg-neonBlue selection:text-black">
      <ScrollToTop />
      <CustomCursor />
      <Header />
      <main>
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route path="/" element={<MainPageLayout />} />
            <Route path="/course/:id" element={<LazyCourseDetails />} />
            <Route path="/course-finder" element={<LazyCourseFinder />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;

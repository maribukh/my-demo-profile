import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CoursesList from "./components/CoursesList";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TechTicker from "./components/TechTicker";
import NotFound from "./pages/NotFound";
import SEO from "./components/SEO";

const LazyCourseFinder = lazy(() => import("./pages/CourseFinder"));
const LazyCourseDetails = lazy(() => import("./pages/CourseDetails"));
const LazyAboutInstructor = lazy(() => import("./components/AboutInstructor"));
const LazyServices = lazy(() => import("./pages/Services"));

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
      title="Future of Front-End"
      description="Interactive courses on React and TypeScript from a practicing expert. Master the stack that powers the modern web."
    />
    <Hero />
    <TechTicker />
    <Features />
    <CoursesList />
    <Suspense fallback={<SectionLoadingFallback />}>
      <LazyAboutInstructor />
    </Suspense>
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
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route path="/" element={<MainPageLayout />} />
            <Route path="/course-finder" element={<LazyCourseFinder />} />
            <Route path="/course/:id" element={<LazyCourseDetails />} />
            <Route path="/services" element={<LazyServices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;

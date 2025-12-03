import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/assets/bg-main.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <div className="relative inline-block mb-6">
          <h1 className="text-8xl md:text-9xl font-bold font-orbitron text-white tracking-widest relative z-10">
            404
          </h1>
          <span className="absolute top-0 left-0 -ml-1 text-neonPink opacity-70 animate-pulse font-orbitron text-8xl md:text-9xl font-bold tracking-widest mix-blend-screen">
            404
          </span>
          <span className="absolute top-0 left-0 ml-1 text-neonBlue opacity-70 animate-pulse font-orbitron text-8xl md:text-9xl font-bold tracking-widest mix-blend-screen animation-delay-75">
            404
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-orbitron uppercase tracking-wide">
          System Failure
        </h2>

        <div className="bg-black/50 border border-white/10 rounded-lg p-4 mb-8 font-mono text-left text-sm md:text-base backdrop-blur-sm shadow-[0_0_20px_rgba(0,240,255,0.1)]">
          <p className="text-red-500">&gt; Error: Route not found</p>
          <p className="text-gray-400">&gt; Code: 0x000404_PAGE_MISSING</p>
          <p className="text-gray-400">
            &gt; Status:{" "}
            <span className="text-neonBlue animate-pulse">DISCONNECTED</span>
          </p>
          <p className="text-gray-500 mt-2">
            &gt; The coordinates you are looking for do not exist in this
            sector.
          </p>
        </div>

        <Link to="/">
          <Button variant="primary" size="lg" className="px-10">
            Return to Base
          </Button>
        </Link>
      </div>
    </div>
  );
}

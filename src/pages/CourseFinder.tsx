import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import Button from "../components/UI/Button";
import {
  FaUser,
  FaEnvelope,
  FaRocket,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const benefits = [
  "Expert-led live sessions",
  "Practical, project-based learning",
  "Portfolio-ready final project",
  "Access to a private community",
];

export default function CourseFinder() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from("registrations")
        .insert([{ full_name: name, email: email }]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
    } catch (err: any) {
      console.error("Registration error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-2xl shadow-lg backdrop-blur-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8 bg-black/20">
            <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-white font-orbitron">
              Start Your Journey
            </h1>
            <p className="mt-4 text-gray-300/80">
              By registering, you take the first step towards mastering modern
              web development and building the future.
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <FaCheckCircle className="text-neonBlue text-lg" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full">
                <FaRocket className="text-6xl text-neonBlue" />
                <h2 className="mt-6 text-3xl font-bold text-white font-orbitron">
                  Registration Sent!
                </h2>
                <p className="mt-2 text-gray-300/80">
                  Thank you! We've received your details and will contact you
                  shortly with the next steps.
                </p>
                <Link to="/" className="mt-8">
                  <Button variant="primary">Back to Homepage</Button>
                </Link>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Fill in your details
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-black/20 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:ring-2 focus:ring-neonBlue focus:outline-none transition"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-black/20 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:ring-2 focus:ring-neonBlue focus:outline-none transition"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                      <FaExclamationCircle />
                      <span>{error}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="mt-4 w-full"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Register Now"}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

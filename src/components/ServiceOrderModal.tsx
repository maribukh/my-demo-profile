import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import Button from "./UI/Button";
import { FaTimes, FaCheckCircle, FaSpinner } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  defaultMessage: string;
}

export default function ServiceOrderModal({
  isOpen,
  onClose,
  serviceTitle,
  defaultMessage,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(defaultMessage);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (isOpen) {
      setMessage(defaultMessage);
      setStatus("idle");
    }
  }, [isOpen, defaultMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const { error } = await supabase.from("service_orders").insert([
        {
          client_name: name,
          client_email: email,
          service_type: serviceTitle,
          message: message,
        },
      ]);

      if (error) throw error;
      setStatus("success");
      setTimeout(() => {
        onClose();
        setName("");
        setEmail("");
      }, 2000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0A0A0F] border border-white/10 rounded-2xl p-6 shadow-[0_0_50px_rgba(0,240,255,0.1)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes size={20} />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <FaCheckCircle className="text-5xl text-neonBlue mb-4" />
            <h3 className="text-2xl font-bold text-white">Request Sent!</h3>
            <p className="text-gray-400 mt-2">I will contact you shortly.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-white mb-2 font-orbitron">
              Order: <span className="text-neonBlue">{serviceTitle}</span>
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Fill out the details below to start our collaboration.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neonBlue focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neonBlue focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Project Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neonBlue focus:outline-none transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

              <Button
                type="submit"
                variant="primary"
                className="w-full mt-2"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <FaSpinner className="animate-spin mx-auto" />
                ) : (
                  "Send Request"
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

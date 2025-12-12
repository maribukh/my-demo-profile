import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import Button from "./UI/Button";
import {
  FaTimes,
  FaCheckCircle,
  FaSpinner,
  FaUser,
  FaBuilding,
  FaMoneyBillWave,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

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
  const { t } = useLanguage();

  const [clientType, setClientType] = useState<"person" | "company">("person");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (isOpen) {
      setAdditionalDetails(
        defaultMessage && !defaultMessage.includes("Hi Mariam")
          ? defaultMessage
          : ""
      );
      setStatus("idle");
      setSelectedTags([]);
      setBudget("");
      setTimeline("");
      setAgreed(false);
    }
  }, [isOpen, defaultMessage]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const sendTelegramNotification = async (finalMsg: string) => {
    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: name,
          clientEmail: email,
          service: serviceTitle,
          msg: finalMsg,
        }),
      });

      if (!response.ok) {
        console.error("Failed to send notification via server");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setStatus("loading");

    const fullMessageForDB = `
      Type: ${clientType.toUpperCase()}
      Company: ${companyName || "N/A"}
      Budget: ${budget || "Not specified"}
      Timeline: ${timeline || "Not specified"}
      Tags: ${selectedTags.join(", ") || "None"}
      ---
      Details: ${additionalDetails}
    `;

    try {
      const { error } = await supabase.from("service_orders").insert([
        {
          client_name: name,
          client_email: email,
          service_type: serviceTitle,
          message: fullMessageForDB,
        },
      ]);

      if (error) throw error;

      await sendTelegramNotification(fullMessageForDB);

      setStatus("success");

      setTimeout(() => {
        onClose();
        setName("");
        setEmail("");
        setCompanyName("");
      }, 2500);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0A0A0F] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.1)] my-auto overflow-hidden">
        <div className="bg-white/5 border-b border-white/10 p-6 flex justify-between items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white font-orbitron">
              {t.modal.order}{" "}
              <span className="text-neonBlue">{serviceTitle}</span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">{t.modal.desc}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <FaCheckCircle className="text-6xl text-green-400 mb-6 animate-bounce" />
              <h3 className="text-3xl font-bold text-white font-orbitron">
                {t.modal.success}
              </h3>
              <p className="text-gray-400 mt-2 font-body text-lg">
                {t.modal.successDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setClientType("person")}
                  className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all duration-300 ${
                    clientType === "person"
                      ? "bg-neonBlue/10 border-neonBlue text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                      : "bg-white/5 border-white/10 text-gray-500 hover:bg-white/10"
                  }`}
                >
                  <FaUser
                    className={
                      clientType === "person"
                        ? "text-neonBlue"
                        : "text-gray-500"
                    }
                    size={24}
                  />
                  <span className="font-bold text-sm">
                    {t.modal.types.person}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setClientType("company")}
                  className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all duration-300 ${
                    clientType === "company"
                      ? "bg-neonPink/10 border-neonPink text-white shadow-[0_0_15px_rgba(255,0,170,0.2)]"
                      : "bg-white/5 border-white/10 text-gray-500 hover:bg-white/10"
                  }`}
                >
                  <FaBuilding
                    className={
                      clientType === "company"
                        ? "text-neonPink"
                        : "text-gray-500"
                    }
                    size={24}
                  />
                  <span className="font-bold text-sm">
                    {t.modal.types.company}
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider font-orbitron">
                    {t.modal.labels.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neonBlue focus:outline-none transition-colors font-body focus:bg-white/10"
                    placeholder={t.modal.labels.name}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider font-orbitron">
                    {t.modal.labels.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neonBlue focus:outline-none transition-colors font-body focus:bg-white/10"
                    placeholder="you@example.com"
                  />
                </div>

                {clientType === "company" && (
                  <div className="md:col-span-2 space-y-1.5 animate-fade-in">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider font-orbitron">
                      {t.modal.labels.company}
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neonPink focus:outline-none transition-colors font-body focus:bg-white/10"
                      placeholder={t.modal.labels.company}
                    />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider font-orbitron">
                    <FaMoneyBillWave className="text-green-400" />{" "}
                    {t.modal.labels.budget}
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {t.modal.options.budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`py-2 px-1 text-xs rounded-lg border transition-all ${
                          budget === b
                            ? "bg-green-500/20 border-green-500 text-white"
                            : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider font-orbitron">
                    <FaClock className="text-neonPurple" />{" "}
                    {t.modal.labels.time}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {t.modal.options.times.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setTimeline(time)}
                        className={`py-2 px-1 text-xs rounded-lg border transition-all ${
                          timeline === time
                            ? "bg-neonPurple/20 border-neonPurple text-white"
                            : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider font-orbitron">
                  {t.modal.labels.interests}
                </label>
                <div className="flex flex-wrap gap-2">
                  {t.modal.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                        selectedTags.includes(tag)
                          ? "bg-neonBlue/20 border-neonBlue text-neonBlue shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                          : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider font-orbitron">
                  {t.modal.labels.details}
                </label>
                <textarea
                  rows={3}
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neonBlue focus:outline-none transition-colors resize-none font-body placeholder-gray-600 focus:bg-white/10"
                  placeholder={t.modal.placeholders.details}
                />
              </div>

              <div className="flex items-start justify-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-gray-600 text-neonBlue focus:ring-neonBlue bg-black/50 cursor-pointer"
                />
                <label
                  htmlFor="terms"
                  className="text-xs text-gray-400 font-body cursor-pointer"
                >
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    target="_blank"
                    className="text-neonBlue hover:underline"
                  >
                    Terms & Conditions
                  </Link>
                  . I understand that a 50% prepayment is required to start.
                </label>
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm font-body text-center bg-red-500/10 p-2 rounded">
                  Something went wrong. Please try again.
                </p>
              )}

              <Button
                type="submit"
                variant="primary"
                className={`w-full py-4 text-lg shadow-lg flex justify-center items-center gap-2 ${
                  agreed
                    ? "shadow-neonBlue/20"
                    : "opacity-50 cursor-not-allowed"
                }`}
                disabled={status === "loading" || !agreed}
              >
                {status === "loading" ? (
                  <>
                    <FaSpinner className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={16} /> {t.modal.btnSend}
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

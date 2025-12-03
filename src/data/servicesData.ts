import { FaLaptopCode, FaMobileAlt, FaRocket } from "react-icons/fa";

export const servicesData = [
  {
    id: "landing",
    title: "Landing Page",
    price: "From $200",
    description:
      "A high-converting, modern one-page website to showcase your product or portfolio.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Contact Form Integration",
      "Fast Loading Speed",
    ],
    icon: FaLaptopCode,
    color: "text-neonBlue",
    borderColor: "border-neonBlue",
  },
  {
    id: "react-app",
    title: "React Application",
    price: "From $600",
    description:
      "Full-featured web application with dynamic data, authentication, and complex logic.",
    features: [
      "React + TypeScript",
      "API Integration",
      "State Management",
      "Modern UI/UX",
    ],
    icon: FaRocket,
    color: "text-neonPink",
    borderColor: "border-neonPink",
  },
  {
    id: "consultation",
    title: "Code Review & Help",
    price: "$50 / hour",
    description:
      "Stuck on a bug? Need a review of your React code? I will help you fix and optimize it.",
    features: [
      "Code Refactoring",
      "Bug Fixing",
      "Best Practices Advice",
      "Mentoring Session",
    ],
    icon: FaMobileAlt,
    color: "text-neonPurple",
    borderColor: "border-neonPurple",
  },
];

import { FaLaptopCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import { type Language } from "./translations";

export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  color: string;
  borderColor: string;
  defaultMessage: string;
}

export const servicesData: Record<Language, Service[]> = {
  en: [
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
      defaultMessage:
        "Hi Mariam, I need a modern Landing Page for my business. I have a deadline of 2 weeks. Can we discuss the details?",
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
      defaultMessage:
        "Hello! I am looking to build a custom React application. It requires user authentication and database integration. My budget is...",
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
      defaultMessage:
        "Hi, I need help with my current React project. I am stuck on a specific bug/feature and need a code review.",
    },
  ],
  ka: [
    {
      id: "landing",
      title: "Lending Page",
      price: "200₾-დან",
      description:
        "თანამედროვე, სწრაფი ერთგვერდიანი ვებსაიტი თქვენი პროდუქტის ან პორტფოლიოს წარმოსაჩენად.",
      features: [
        "ადაპტური დიზაინი",
        "SEO ოპტიმიზაცია",
        "საკონტაქტო ფორმა",
        "სწრაფი ჩატვირთვა",
      ],
      icon: FaLaptopCode,
      color: "text-neonBlue",
      borderColor: "border-neonBlue",
      defaultMessage:
        "გამარჯობა მარიამ, მჭირდება ლენდინგ გვერდი ჩემი ბიზნესისთვის. ვადები არის...",
    },
    {
      id: "react-app",
      title: "React აპლიკაცია",
      price: "600₾-დან",
      description:
        "სრულფასოვანი ვებ-აპლიკაცია დინამიური მონაცემებით, ავტორიზაციითა და რთული ლოგიკით.",
      features: [
        "React + TypeScript",
        "API ინტეგრაცია",
        "State Management",
        "თანამედროვე UI/UX",
      ],
      icon: FaRocket,
      color: "text-neonPink",
      borderColor: "border-neonPink",
      defaultMessage:
        "გამარჯობა! მინდა React აპლიკაციის შეკვეთა. პროექტი მოიცავს...",
    },
    {
      id: "consultation",
      title: "კონსულტაცია & დახმარება",
      price: "50₾ / სთ",
      description:
        "გაჭედილი ხარ ბაგზე? გჭირდება კოდის შემოწმება? დაგეხმარები პრობლემის მოგვარებასა და ოპტიმიზაციაში.",
      features: [
        "კოდის რეფაქტორინგი",
        "ბაგების გასწორება",
        "რჩევები და პრაქტიკა",
        "მენტორინგი",
      ],
      icon: FaMobileAlt,
      color: "text-neonPurple",
      borderColor: "border-neonPurple",
      defaultMessage:
        "გამარჯობა, მჭირდება დახმარება React პროექტში. ვერ ვასწორებ კონკრეტულ ბაგს...",
    },
  ],
  ru: [
    {
      id: "landing",
      title: "Лендинг Пейдж",
      price: "От $200",
      description:
        "Современный, конверсионный одностраничный сайт для презентации вашего продукта или портфолио.",
      features: [
        "Адаптивный дизайн",
        "SEO оптимизация",
        "Форма обратной связи",
        "Быстрая загрузка",
      ],
      icon: FaLaptopCode,
      color: "text-neonBlue",
      borderColor: "border-neonBlue",
      defaultMessage:
        "Привет, Мариам! Мне нужен лендинг для бизнеса. Дедлайн - 2 недели.",
    },
    {
      id: "react-app",
      title: "React Приложение",
      price: "От $600",
      description:
        "Полнофункциональное веб-приложение с динамическими данными, авторизацией и сложной логикой.",
      features: [
        "React + TypeScript",
        "Интеграция API",
        "Управление состоянием",
        "Современный UI/UX",
      ],
      icon: FaRocket,
      color: "text-neonPink",
      borderColor: "border-neonPink",
      defaultMessage:
        "Здравствуйте! Хочу заказать разработку приложения на React. Нужна авторизация и база данных.",
    },
    {
      id: "consultation",
      title: "Менторство и Code Review",
      price: "$50 / час",
      description:
        "Застряли с багом? Нужен обзор кода? Я помогу исправить ошибки и оптимизировать проект.",
      features: [
        "Рефакторинг кода",
        "Исправление багов",
        "Best Practices",
        "Менторская сессия",
      ],
      icon: FaMobileAlt,
      color: "text-neonPurple",
      borderColor: "border-neonPurple",
      defaultMessage:
        "Привет, нужна помощь с текущим React проектом. Не могу решить проблему с...",
    },
  ],
};

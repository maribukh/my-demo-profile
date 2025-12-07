import Photo from "../assets/profilephoto.jpg";
import { type Language } from "./translations";

export interface Course {
  id: string;
  title: string;
  level: "Beginner" | "Advanced" | "Workshop";
  duration: string;
  description: string;
  technologies: string[];
  price: number;
  roadmap: { week: string; title: string; content: string }[];
}

export interface EducationHistory {
  id: number;
  period: string;
  title: string;
  source: string;
  description: string;
  keySkills: string[];
}

export interface WorkExperience {
  id: number;
  period: string;
  title: string;
  company: string;
  description: string;
  keySkills: string[];
  projects?: { name: string; url: string }[];
}

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  educationHistory: EducationHistory[];
  experience: WorkExperience[];
  contact: {
    email: string;
    github: string;
  };
}

type AcademyData = {
  instructor: Instructor;
  courses: Course[];
};

export const academyData: Record<Language, AcademyData> = {
  en: {
    instructor: {
      name: "Mariam Bukhaidze",
      imageUrl: Photo,
      title: "Software Engineer & Front-End Developer",
      bio: "I am a Front-End Developer passionate about building high-quality web applications. I specialize in React and TypeScript, focusing on creating responsive, accessible, and performant user interfaces. Available for freelance projects and technical consultation.",
      contact: {
        email: "mariebukh@gmail.com",
        github: "https://github.com/maribukh",
      },
      experience: [
        {
          id: 1,
          period: "2025 (2 Months)",
          title: "Full-Stack Developer Intern",
          company: "Itransition",
          description:
            "Engaged in a hands-on internship, gaining practical experience in both front-end and back-end development. Focused on building and integrating full-stack applications.",
          keySkills: [
            "Node.js & Express",
            "REST API Design",
            "Database Integration",
            "Full-Stack Architecture",
          ],
          projects: [
            {
              name: "User Management App",
              url: "https://github.com/maribukh/user-management-app_itransition",
            },
            {
              name: "Music Store API",
              url: "https://github.com/maribukh/music-store-backend",
            },
          ],
        },
      ],
      educationHistory: [
        {
          id: 1,
          period: "2020 - 2024",
          title: "Bachelor of Business Administration (IT Management)",
          source: "Ivane Javakhishvili Tbilisi State University",
          description:
            "Received a foundational education in business principles with a focus on information technology management.",
          keySkills: [
            "Project Management",
            "IT Strategy",
            "Business Analysis",
            "Database Fundamentals",
          ],
        },
        {
          id: 2,
          period: "2024 - 2025",
          title: "Front-End Development Program",
          source: "Ivane Javakhishvili Tbilisi State University",
          description:
            "Gained hands-on experience with React, TypeScript, and modern styling tools like TailwindCSS.",
          keySkills: [
            "React & JSX",
            "TypeScript",
            "Responsive Design (Flexbox & Grid)",
            "State Management",
          ],
        },
        {
          id: 3,
          period: "2025 - Present",
          title: "Women Mentorship in Tech",
          source: "Business and Technology University",
          description:
            "Developing collaborative projects with Angular & TypeScript, while practicing teamwork and agile methods.",
          keySkills: [
            "Agile Methodologies",
            "Team Collaboration (Git)",
            "Angular Basics",
            "Code Review",
          ],
        },
        {
          id: 4,
          period: "2024 - 2025",
          title: "Front-End with React",
          source: "Tbilisi School of Communication",
          description:
            "Completed an intensive course focused on practical React development skills and modern workflows.",
          keySkills: [
            "Component Architecture",
            "React Hooks",
            "API Integration (Fetch)",
            "Vite",
          ],
        },
        {
          id: 5,
          period: "2025",
          title: "Front-End Programming with React",
          source: "New Horizons",
          description:
            "Further specialized skills in React, focusing on advanced state management and performance optimization.",
          keySkills: [
            "Advanced State Management",
            "Performance Optimization",
            "Testing (Jest/RTL)",
          ],
        },
      ],
    },
    courses: [
      {
        id: "react-full-immersion",
        title: "React Mentorship Program",
        level: "Beginner",
        duration: "12 Weeks",
        description:
          "A comprehensive ticket into the world of front-end development. We'll start with the basics of HTML, CSS, and JavaScript, then dive deep into building modern, fast, and interactive web applications with React.",
        technologies: [
          "React",
          "TypeScript",
          "JavaScript (ES6+)",
          "HTML5",
          "CSS3",
          "TailwindCSS",
          "Git",
        ],
        price: 1800,
        roadmap: [
          {
            week: "1-2",
            title: "Foundations of Web",
            content:
              "Master HTML5 semantics, modern CSS with Flexbox & Grid, and core JavaScript (ES6+) concepts.",
          },
          {
            week: "3-5",
            title: "Introduction to React",
            content:
              "Learn JSX, component architecture, props, state management with React Hooks (useState, useEffect).",
          },
          {
            week: "6-8",
            title: "Advanced React & TypeScript",
            content:
              "Integrate TypeScript for type safety, handle forms, and manage complex state with context API.",
          },
          {
            week: "9-10",
            title: "Styling & API Integration",
            content:
              "Build beautiful UIs with TailwindCSS and fetch data from real-world APIs.",
          },
          {
            week: "11-12",
            title: "Final Project",
            content:
              "Apply all learned skills to build a complete, portfolio-ready web application from scratch.",
          },
        ],
      },
      {
        id: "ui-architect",
        title: "UI Architect: Modern Styling",
        level: "Advanced",
        duration: "6 Weeks",
        description:
          "For those already familiar with JavaScript and React who want to build truly beautiful and professional interfaces. We'll explore advanced styling techniques and component libraries.",
        technologies: [
          "TailwindCSS",
          "SCSS",
          "CSS Animations",
          "Framer Motion",
          "Storybook",
        ],
        price: 950,
        roadmap: [
          {
            week: "1",
            title: "Advanced CSS Techniques",
            content:
              "Deep dive into CSS Grid, custom properties, and advanced selectors for complex layouts.",
          },
          {
            week: "2-3",
            title: "Mastering TailwindCSS",
            content:
              "Customize themes, create plugins, and optimize for production with a utility-first workflow.",
          },
          {
            week: "4",
            title: "UI Animation Principles",
            content:
              "Learn the fundamentals of web animation, using CSS transitions, keyframes, and introduction to Framer Motion.",
          },
          {
            week: "5-6",
            title: "Component Driven Development",
            content:
              "Build a reusable component library and document it professionally using Storybook.",
          },
        ],
      },
      {
        id: "real-time-chat-workshop",
        title: "Workshop: Real-Time Chat",
        level: "Workshop",
        duration: "4 Weeks",
        description:
          "Maximum practice, minimum theory. In 4 weeks, we will build a fully functional real-time chat application from scratch. You'll learn to work with APIs and manage complex state.",
        technologies: [
          "React",
          "TypeScript",
          "WebSocket",
          "Node.js (Express)",
          "Socket.IO",
        ],
        price: 800,
        roadmap: [
          {
            week: "1",
            title: "Project Setup & UI",
            content:
              "Initialize the project, set up the development environment, and build the core chat interface with React.",
          },
          {
            week: "2",
            title: "Back-End with Express & Socket.IO",
            content:
              "Create a basic Node.js server and establish a real-time WebSocket connection.",
          },
          {
            week: "3",
            title: "Real-Time Communication",
            content:
              "Implement logic for sending and receiving messages in real-time between multiple clients.",
          },
          {
            week: "4",
            title: "Features & Deployment",
            content:
              "Add features like user lists and typing indicators, and prepare the application for deployment.",
          },
        ],
      },
    ],
  },

  ka: {
    instructor: {
      name: "მარიამ ბუხაიძე",
      imageUrl: Photo,
      title: "Software Engineer & Front-End Developer",
      bio: "ვარ Front-End დეველოპერი, რომელიც ფოკუსირებულია ხარისხიანი ვებ-აპლიკაციების შექმნაზე. ვსპეციალიზდები React-სა და TypeScript-ზე. ვიღებ შეკვეთებს ვებსაიტების დამზადებასა და ტექნიკურ მხარდაჭერაზე.",
      contact: {
        email: "mariebukh@gmail.com",
        github: "https://github.com/maribukh",
      },
      experience: [
        {
          id: 1,
          period: "2025 (2 თვე)",
          title: "Full-Stack დეველოპერი (სტაჟიორი)",
          company: "Itransition",
          description:
            "გავიარე პრაქტიკული სტაჟირება, სადაც შევიძინე გამოცდილება როგორც Front-End, ასევე Back-End მიმართულებით. ძირითადი ფოკუსი იყო Full-Stack აპლიკაციების აწყობასა და ინტეგრაციაზე.",
          keySkills: [
            "Node.js & Express",
            "REST API Design",
            "Database Integration",
            "Full-Stack Architecture",
          ],
          projects: [
            {
              name: "User Management App",
              url: "https://github.com/maribukh/user-management-app_itransition",
            },
            {
              name: "Music Store API",
              url: "https://github.com/maribukh/music-store-backend",
            },
          ],
        },
      ],
      educationHistory: [
        {
          id: 1,
          period: "2020 - 2024",
          title: "ბიზნესის ადმინისტრირების ბაკალავრი (IT მენეჯმენტი)",
          source:
            "ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი",
          description:
            "მივიღე ფუნდამენტური განათლება ბიზნეს პრინციპებში, საინფორმაციო ტექნოლოგიების მენეჯმენტის განხრით.",
          keySkills: [
            "Project Management",
            "IT Strategy",
            "Business Analysis",
            "Database Fundamentals",
          ],
        },
        {
          id: 2,
          period: "2024 - 2025",
          title: "Front-End დეველოპმენტის პროგრამა",
          source:
            "ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი",
          description:
            "მივიღე პრაქტიკული გამოცდილება React, TypeScript და თანამედროვე სტილიზაციის ინსტრუმენტებში (TailwindCSS).",
          keySkills: [
            "React & JSX",
            "TypeScript",
            "Responsive Design",
            "State Management",
          ],
        },
        {
          id: 3,
          period: "2025 - დღემდე",
          title: "Women Mentorship in Tech",
          source: "ბიზნესისა და ტექნოლოგიების უნივერსიტეტი (BTU)",
          description:
            "ვმუშაობ კოლაბორაციულ პროექტებზე Angular-სა და TypeScript-ზე, გუნდური მუშაობისა და Agile მეთოდოლოგიების გამოყენებით.",
          keySkills: [
            "Agile Methodologies",
            "Team Collaboration (Git)",
            "Angular Basics",
            "Code Review",
          ],
        },
        {
          id: 4,
          period: "2024 - 2025",
          title: "Front-End with React",
          source: "Tbilisi School of Communication",
          description:
            "გავიარე ინტენსიური კურსი, რომელიც ფოკუსირებული იყო პრაქტიკულ React-ის უნარებსა და თანამედროვე სამუშაო პროცესებზე.",
          keySkills: [
            "Component Architecture",
            "React Hooks",
            "API Integration (Fetch)",
            "Vite",
          ],
        },
        {
          id: 5,
          period: "2025",
          title: "Front-End Programming with React",
          source: "New Horizons",
          description:
            "გავიღრმავე ცოდნა React-ში, განსაკუთრებით რთული State Management-ისა და ოპტიმიზაციის მიმართულებით.",
          keySkills: [
            "Advanced State Management",
            "Performance Optimization",
            "Testing (Jest/RTL)",
          ],
        },
      ],
    },
    courses: [
      {
        id: "react-full-immersion",
        title: "React მენტორინგი",
        level: "Beginner",
        duration: "12 კვირა",
        description:
          "შენი ბილეთი Front-End სამყაროში. დავიწყებთ HTML, CSS და JavaScript-ის საფუძვლებით, შემდეგ კი სიღრმისეულად შევისწავლით React-ს თანამედროვე და სწრაფი ვებ-აპლიკაციების შესაქმნელად.",
        technologies: [
          "React",
          "TypeScript",
          "JavaScript (ES6+)",
          "HTML5",
          "CSS3",
          "TailwindCSS",
          "Git",
        ],
        price: 1800,
        roadmap: [
          {
            week: "1-2",
            title: "Web-ის საფუძვლები",
            content:
              "HTML5 სემანტიკა, თანამედროვე CSS (Flexbox & Grid) და JavaScript (ES6+) ძირითადი კონცეფციები.",
          },
          {
            week: "3-5",
            title: "შესავალი React-ში",
            content:
              "JSX, კომპონენტური არქიტექტურა, props, state management (useState, useEffect).",
          },
          {
            week: "6-8",
            title: "Advanced React & TypeScript",
            content:
              "TypeScript-ის ინტეგრაცია, ფორმებთან მუშაობა და კომპლექსური state-ის მართვა Context API-თ.",
          },
          {
            week: "9-10",
            title: "სტილიზაცია & API",
            content:
              "ლამაზი UI-ის აწყობა TailwindCSS-ით და რეალურ API-ებთან მუშაობა.",
          },
          {
            week: "11-12",
            title: "საბოლოო პროექტი",
            content:
              "მიღებული ცოდნის გამოყენება სრულყოფილი, პორტფოლიოსთვის მზა ვებ-აპლიკაციის შესაქმნელად.",
          },
        ],
      },
      {
        id: "ui-architect",
        title: "UI არქიტექტორი",
        level: "Advanced",
        duration: "6 კვირა",
        description:
          "მათთვის, ვინც უკვე იცის React და სურს შექმნას მართლაც შთამბეჭდავი ინტერფეისები. განვიხილავთ სტილიზაციის რთულ ტექნიკებსა და კომპონენტების ბიბლიოთეკებს.",
        technologies: [
          "TailwindCSS",
          "SCSS",
          "CSS Animations",
          "Framer Motion",
          "Storybook",
        ],
        price: 950,
        roadmap: [
          {
            week: "1",
            title: "Advanced CSS ტექნიკები",
            content:
              "CSS Grid, custom properties და რთული სელექტორები კომპლექსური ლეაუტებისთვის.",
          },
          {
            week: "2-3",
            title: "TailwindCSS-ის დაუფლება",
            content: "თემების კასტომიზაცია, პლაგინების შექმნა და ოპტიმიზაცია.",
          },
          {
            week: "4",
            title: "UI ანიმაციის პრინციპები",
            content:
              "ვებ-ანიმაციის საფუძვლები, CSS transitions და Framer Motion.",
          },
          {
            week: "5-6",
            title: "Component Driven Development",
            content:
              "მრავალჯერადი გამოყენების კომპონენტების შექმნა და დოკუმენტირება Storybook-ში.",
          },
        ],
      },
      {
        id: "real-time-chat-workshop",
        title: "ვორქშოპი: Real-Time Chat",
        level: "Workshop",
        duration: "4 კვირა",
        description:
          "მაქსიმალური პრაქტიკა, მინიმალური თეორია. 4 კვირაში ავაწყობთ სრულფასოვან ჩატს ნულიდან. ისწავლით WebSocket-ებთან მუშაობას.",
        technologies: [
          "React",
          "TypeScript",
          "WebSocket",
          "Node.js (Express)",
          "Socket.IO",
        ],
        price: 800,
        roadmap: [
          {
            week: "1",
            title: "პროექტის გამართვა & UI",
            content:
              "გარემოს მომზადება და ჩატის ძირითადი ინტერფეისის აწყობა React-ზე.",
          },
          {
            week: "2",
            title: "Back-End: Express & Socket.IO",
            content:
              "მარტივი Node.js სერვერის შექმნა და WebSocket კავშირის დამყარება.",
          },
          {
            week: "3",
            title: "Real-Time კომუნიკაცია",
            content:
              "შეტყობინებების გაგზავნა/მიღება რეალურ დროში კლიენტებს შორის.",
          },
          {
            week: "4",
            title: "ფუნქციონალი & დეპლოი",
            content:
              "მომხმარებლების სია, typing ინდიკატორები და აპლიკაციის განთავსება სერვერზე.",
          },
        ],
      },
    ],
  },

  ru: {
    instructor: {
      name: "Мариам Бухаидзе",
      imageUrl: Photo,
      title: "Software Engineer & Front-End Developer",
      bio: "Front-End разработчик, специализирующийся на создании современных веб-приложений. Основной стек: React и TypeScript. Открыта для фриланс-заказов и долгосрочного сотрудничества по разработке интерфейсов.",
      contact: {
        email: "mariebukh@gmail.com",
        github: "https://github.com/maribukh",
      },
      experience: [
        {
          id: 1,
          period: "2025 (2 месяца)",
          title: "Full-Stack Developer Intern",
          company: "Itransition",
          description:
            "Прошла практическую стажировку, получив опыт как во фронтенде, так и в бэкенде. Фокус на создании и интеграции full-stack приложений.",
          keySkills: [
            "Node.js & Express",
            "REST API Design",
            "Database Integration",
            "Full-Stack Architecture",
          ],
          projects: [
            {
              name: "User Management App",
              url: "https://github.com/maribukh/user-management-app_itransition",
            },
            {
              name: "Music Store API",
              url: "https://github.com/maribukh/music-store-backend",
            },
          ],
        },
      ],
      educationHistory: [
        {
          id: 1,
          period: "2020 - 2024",
          title: "Бакалавр бизнес-администрирования (IT Менеджмент)",
          source:
            "Тбилисский государственный университет им. Иванэ Джавахишвили",
          description:
            "Получила фундаментальное образование в области бизнес-принципов с упором на управление информационными технологиями.",
          keySkills: [
            "Project Management",
            "IT Strategy",
            "Business Analysis",
            "Database Fundamentals",
          ],
        },
        {
          id: 2,
          period: "2024 - 2025",
          title: "Front-End Development Program",
          source:
            "Тбилисский государственный университет им. Иванэ Джавахишвили",
          description:
            "Получила практический опыт работы с React, TypeScript и современными инструментами стилизации, такими как TailwindCSS.",
          keySkills: [
            "React & JSX",
            "TypeScript",
            "Responsive Design (Flexbox & Grid)",
            "State Management",
          ],
        },
        {
          id: 3,
          period: "2025 - Настоящее время",
          title: "Women Mentorship in Tech",
          source: "Университет бизнеса и технологий (BTU)",
          description:
            "Разработка совместных проектов на Angular и TypeScript, практика командной работы и методологий Agile.",
          keySkills: [
            "Agile Methodologies",
            "Team Collaboration (Git)",
            "Angular Basics",
            "Code Review",
          ],
        },
        {
          id: 4,
          period: "2024 - 2025",
          title: "Front-End with React",
          source: "Tbilisi School of Communication",
          description:
            "Прошла интенсивный курс, ориентированный на практические навыки React и современные рабочие процессы.",
          keySkills: [
            "Component Architecture",
            "React Hooks",
            "API Integration (Fetch)",
            "Vite",
          ],
        },
        {
          id: 5,
          period: "2025",
          title: "Front-End Programming with React",
          source: "New Horizons",
          description:
            "Углубила знания React, сосредоточившись на управлении сложным состоянием и оптимизации производительности.",
          keySkills: [
            "Advanced State Management",
            "Performance Optimization",
            "Testing (Jest/RTL)",
          ],
        },
      ],
    },
    courses: [
      {
        id: "react-full-immersion",
        title: "React Менторство",
        level: "Beginner",
        duration: "12 Недель",
        description:
          "Ваш билет в мир фронтенд-разработки. Начнем с основ HTML, CSS и JavaScript, а затем глубоко погрузимся в создание современных, быстрых веб-приложений на React.",
        technologies: [
          "React",
          "TypeScript",
          "JavaScript (ES6+)",
          "HTML5",
          "CSS3",
          "TailwindCSS",
          "Git",
        ],
        price: 1800,
        roadmap: [
          {
            week: "1-2",
            title: "Основы Web",
            content:
              "Семантика HTML5, современный CSS (Flexbox & Grid) и основы JavaScript (ES6+).",
          },
          {
            week: "3-5",
            title: "Введение в React",
            content:
              "JSX, компонентная архитектура, props, управление состоянием (useState, useEffect).",
          },
          {
            week: "6-8",
            title: "Advanced React & TypeScript",
            content: "Интеграция TypeScript, работа с формами и Context API.",
          },
          {
            week: "9-10",
            title: "Стилизация и API",
            content:
              "Создание UI с TailwindCSS и получение данных из реальных API.",
          },
          {
            week: "11-12",
            title: "Финальный проект",
            content:
              "Применение всех навыков для создания полноценного веб-приложения для портфолио.",
          },
        ],
      },
      {
        id: "ui-architect",
        title: "UI Архитектор",
        level: "Advanced",
        duration: "6 Недель",
        description:
          "Для тех, кто уже знаком с React и хочет создавать действительно впечатляющие интерфейсы. Изучим продвинутую стилизацию и библиотеки компонентов.",
        technologies: [
          "TailwindCSS",
          "SCSS",
          "CSS Animations",
          "Framer Motion",
          "Storybook",
        ],
        price: 950,
        roadmap: [
          {
            week: "1",
            title: "Продвинутый CSS",
            content: "CSS Grid, пользовательские свойства и сложные селекторы.",
          },
          {
            week: "2-3",
            title: "Мастерство TailwindCSS",
            content:
              "Кастомизация тем, создание плагинов и оптимизация для продакшена.",
          },
          {
            week: "4",
            title: "Принципы анимации",
            content:
              "Основы веб-анимации, CSS transitions и введение во Framer Motion.",
          },
          {
            week: "5-6",
            title: "Component Driven Development",
            content:
              "Создание библиотеки переиспользуемых компонентов и документация в Storybook.",
          },
        ],
      },
      {
        id: "real-time-chat-workshop",
        title: "Воркшоп: Real-Time Chat",
        level: "Workshop",
        duration: "4 Недели",
        description:
          "Максимум практики, минимум теории. За 4 недели создадим полноценный чат с нуля. Работа с WebSocket и сложным состоянием.",
        technologies: [
          "React",
          "TypeScript",
          "WebSocket",
          "Node.js (Express)",
          "Socket.IO",
        ],
        price: 800,
        roadmap: [
          {
            week: "1",
            title: "Настройка и UI",
            content:
              "Подготовка среды и создание основного интерфейса чата на React.",
          },
          {
            week: "2",
            title: "Back-End: Express & Socket.IO",
            content:
              "Создание базового сервера Node.js и настройка WebSocket соединения.",
          },
          {
            week: "3",
            title: "Real-Time Коммуникация",
            content:
              "Логика отправки и получения сообщений в реальном времени.",
          },
          {
            week: "4",
            title: "Фичи и Деплой",
            content:
              "Списки пользователей, индикаторы ввода текста и публикация приложения.",
          },
        ],
      },
    ],
  },
};

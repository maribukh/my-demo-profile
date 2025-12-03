export type Language = "en" | "ka" | "ru";

export const translations = {
  en: {
    nav: {
      courses: "Courses",
      services: "Services",
      about: "About Instructor",
      contacts: "Contacts",
    },
    hero: {
      title: "Become the Front-End Developer of the Future",
      subtitle:
        "Interactive courses on React and TypeScript from a practicing expert. Master the stack that powers the modern web.",
      btnCourses: "View All Courses",
      btnInstructor: "Meet the Instructor",
    },
    features: {
      title: "Why Choose Us?",
      items: [
        {
          title: "Practical Experience",
          desc: "Project-based assignments and Study Projects to solidify knowledge.",
        },
        {
          title: "Modern Technologies",
          desc: "React, TypeScript, Tailwind — a relevant and in-demand tech stack.",
        },
        {
          title: "Career Growth",
          desc: "Mentoring, code reviews, and support to reach the next level.",
        },
        {
          title: "Flexible Format",
          desc: "Online classes and recordings — learn at your own convenient pace.",
        },
      ],
    },
    courses: {
      title: "Our Learning Programs",
      findTitle: "Don't know where to start?",
      findDesc:
        "Answer a few questions, and we'll find the perfect program for you.",
      btnFind: "Find My Course",
      card: {
        duration: "Duration",
        tech: "Technologies",
        details: "Details",
        students: "students",
      },
    },
    instructor: {
      expTitle: "Professional Experience",
      skills: "Key Skills",
      eduTitle: "Education & Certifications",
      projects: "Projects",
    },
    footer: {
      title: "Join the Developer Community",
      text: "Get the latest course news and career tips directly in your inbox.",
      btnSubscribe: "Subscribe",
      copyright: "MB Dev Academy. All Rights Reserved.",
    },
    services: {
      title: "Freelance &",
      subtitle: "Development",
      desc: "Need a website or a custom application? I offer professional development services using the latest tech stack.",
      customProject: "Have a custom project?",
      customDesc:
        "If you need something specific that isn't listed above, feel free to discuss it.",
      discussBtn: "Discuss My Idea",
      quickChat: "Quick Chat",
      orderBtn: "Order Now",
    },
    modal: {
      order: "Order:",
      desc: "Fill out the details below to start our collaboration.",
      labels: { name: "Name", email: "Email", details: "Project Details" },
      btnSend: "Send Request",
      success: "Request Sent!",
      successDesc: "I will contact you shortly.",
    },
  },
  ka: {
    nav: {
      courses: "კურსები",
      services: "სერვისები",
      about: "ინსტრუქტორი",
      contacts: "კონტაქტი",
    },
    hero: {
      title: "გახდი მომავლის Front-End დეველოპერი",
      subtitle:
        "ინტერაქტიული კურსები React-სა და TypeScript-ზე პრაქტიკოსი ექსპერტისგან. დაეუფლე თანამედროვე ვებ-ტექნოლოგიებს.",
      btnCourses: "ყველა კურსი",
      btnInstructor: "ინსტრუქტორი",
    },
    features: {
      title: "რატომ ჩვენ?",
      items: [
        {
          title: "პრაქტიკული გამოცდილება",
          desc: "პროექტებზე დაფუძნებული სწავლება და რეალური ქეისები.",
        },
        {
          title: "თანამედროვე ტექნოლოგიები",
          desc: "React, TypeScript, Tailwind — მოთხოვნადი ტექნოლოგიური სტეკი.",
        },
        {
          title: "კარიერული ზრდა",
          desc: "მენტორინგი და კოდის გარჩევა პროფესიონალებისგან.",
        },
        {
          title: "მოქნილი გრაფიკი",
          desc: "ონლაინ ლექციები და ჩანაწერები — ისწავლე შენთვის მოსახერხებელ დროს.",
        },
      ],
    },
    courses: {
      title: "სასწავლო პროგრამები",
      findTitle: "არ იცი საიდან დაიწყო?",
      findDesc:
        "უპასუხე რამდენიმე კითხვას და ჩვენ შეგირჩევთ იდეალურ პროგრამას.",
      btnFind: "კურსის შერჩევა",
      card: {
        duration: "ხანგრძლივობა",
        tech: "ტექნოლოგიები",
        details: "დეტალები",
        students: "სტუდენტი",
      },
    },
    instructor: {
      expTitle: "სამუშაო გამოცდილება",
      skills: "უნარები",
      eduTitle: "განათლება და სერტიფიკატები",
      projects: "პროექტები",
    },
    footer: {
      title: "შემოუერთდი თემს",
      text: "მიიღე სიახლეები კურსების შესახებ და კარიერული რჩევები.",
      btnSubscribe: "გამოწერა",
      copyright: "MB Dev Academy. ყველა უფლება დაცულია.",
    },
    services: {
      title: "ფრილანსი და",
      subtitle: "დეველოპმენტი",
      desc: "გჭირდებათ ვებსაიტი ან აპლიკაცია? გთავაზობთ პროფესიონალურ მომსახურებას უახლესი ტექნოლოგიების გამოყენებით.",
      customProject: "გაქვთ განსხვავებული იდეა?",
      customDesc:
        "თუ გჭირდებათ რაიმე სპეციფიკური, რაც ზემოთ არ არის ჩამოთვლილი, მზად ვარ განვიხილო.",
      discussBtn: "იდეის განხილვა",
      quickChat: "სწრაფი ჩატი",
      orderBtn: "შეკვეთა",
    },
    modal: {
      order: "შეკვეთა:",
      desc: "შეავსეთ დეტალები თანამშრომლობის დასაწყებად.",
      labels: {
        name: "სახელი",
        email: "ელ.ფოსტა",
        details: "პროექტის დეტალები",
      },
      btnSend: "გაგზავნა",
      success: "გაგზავნილია!",
      successDesc: "მალე დაგიკავშირდებით.",
    },
  },
  ru: {
    nav: {
      courses: "Курсы",
      services: "Услуги",
      about: "Об авторе",
      contacts: "Контакты",
    },
    hero: {
      title: "Стань Front-End разработчиком будущего",
      subtitle:
        "Интерактивные курсы по React и TypeScript от практикующего эксперта. Освой стек современных веб-технологий.",
      btnCourses: "Все курсы",
      btnInstructor: "Об инструкторе",
    },
    features: {
      title: "Почему мы?",
      items: [
        {
          title: "Практический опыт",
          desc: "Обучение на реальных проектах для закрепления знаний.",
        },
        {
          title: "Современные технологии",
          desc: "React, TypeScript, Tailwind — востребованный стек.",
        },
        {
          title: "Карьерный рост",
          desc: "Менторство, код-ревью и поддержка в развитии.",
        },
        {
          title: "Гибкий формат",
          desc: "Онлайн-занятия и записи — учись в удобном темпе.",
        },
      ],
    },
    courses: {
      title: "Программы обучения",
      findTitle: "Не знаешь с чего начать?",
      findDesc: "Ответь на пару вопросов, и мы подберем идеальную программу.",
      btnFind: "Подобрать курс",
      card: {
        duration: "Длительность",
        tech: "Технологии",
        details: "Подробнее",
        students: "студентов",
      },
    },
    instructor: {
      expTitle: "Опыт работы",
      skills: "Навыки",
      eduTitle: "Образование и сертификаты",
      projects: "Проекты",
    },
    footer: {
      title: "Присоединяйся к сообществу",
      text: "Получай новости о курсах и советы по карьере.",
      btnSubscribe: "Подписаться",
      copyright: "MB Dev Academy. Все права защищены.",
    },
    services: {
      title: "Фриланс и",
      subtitle: "Разработка",
      desc: "Нужен сайт или приложение? Предлагаю профессиональную разработку на современном стеке технологий.",
      customProject: "Есть идея проекта?",
      customDesc: "Если нужно что-то специфическое, я готова обсудить детали.",
      discussBtn: "Обсудить идею",
      quickChat: "Чат",
      orderBtn: "Заказать",
    },
    modal: {
      order: "Заказ:",
      desc: "Заполните детали ниже, чтобы начать сотрудничество.",
      labels: { name: "Имя", email: "Email", details: "Детали проекта" },
      btnSend: "Отправить",
      success: "Отправлено!",
      successDesc: "Я свяжусь с вами в ближайшее время.",
    },
  },
};

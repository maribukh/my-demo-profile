export type Language = "en" | "ka" | "ru";

export const translations = {
  en: {
    nav: {
      courses: "Portfolio",
      services: "Services",
      about: "About Me",
      contacts: "Contact",
    },
    hero: {
      title: "Building Digital Experiences That Matter",
      subtitle:
        "Professional Front-End Developer specializing in React and TypeScript. I turn complex problems into elegant, fast, and scalable web solutions.",
      btnPrimary: "My Services",
      btnSecondary: "View Portfolio",
      btnCourses: "View All Programs",
      btnInstructor: "About Me",
    },
    features: {
      title: "My Approach",
      items: [
        {
          title: "Clean Code",
          desc: "I write maintainable, scalable, and strict TypeScript code.",
        },
        {
          title: "Modern Stack",
          desc: "Utilizing React 19, Tailwind CSS, and Supabase for max performance.",
        },
        {
          title: "Pixel Perfect",
          desc: "Attention to detail in UI/UX. Your site will look perfect on all devices.",
        },
        {
          title: "Fast Delivery",
          desc: "Optimized workflows ensure your project is delivered on time.",
        },
      ],
    },
    courses: {
      title: "Mentorship Programs",
      findTitle: "Want to learn coding?",
      findDesc:
        "I share my knowledge through personalized mentorship. From zero to Junior Developer.",
      btnFind: "Find a Program",
      card: {
        duration: "Duration",
        tech: "Stack",
        details: "Program Details",
        students: "students",
      },
      cta: {
        title: "Ready to Start Your Journey?",
        desc: "Register now to secure your spot in the next cohort.",
        btn: "Register For This Course",
      },
    },
    courseFinder: {
      title: "Start Your Journey",
      desc: "By registering, you take the first step towards mastering modern web development and building the future.",
      formTitle: "Fill in your details",
      labels: {
        name: "Full Name",
        email: "Email Address",
        placeholderName: "Your full name",
        placeholderEmail: "you@example.com",
      },
      btn: "Register Now",
      sending: "Sending...",
      successTitle: "Registration Sent!",
      successDesc:
        "Thank you! We've received your details and will contact you shortly with the next steps.",
      btnBack: "Back to Homepage",
    },
    instructor: {
      expTitle: "My Experience",
      skills: "Tech Stack",
      eduTitle: "Education & Certificates",
      projects: "Selected Projects",
    },
    footer: {
      title: "Let's Work Together",
      text: "Open for freelance projects and collaboration.",
      btnSubscribe: "Contact Me",
      copyright: "Mariam Bukhaidze. All Rights Reserved.",
    },
    services: {
      title: "Web",
      subtitle: "Development",
      desc: "Custom websites, web applications, and technical consultation tailored to your business needs.",
      customProject: "Have a unique idea?",
      customDesc:
        "If you need a custom solution or a complex platform, let's discuss your requirements.",
      discussBtn: "Start a Project",
      quickChat: "Quick Chat",
      orderBtn: "Order Service",
    },
    modal: {
      order: "Request:",
      desc: "Please describe your project briefly.",
      labels: {
        name: "Your Name",
        email: "Your Email",
        details: "Project Details",
      },
      btnSend: "Send Request",
      success: "Request Sent!",
      successDesc: "I will contact you within 24 hours.",
    },
  },
  ka: {
    nav: {
      courses: "პორტფოლიო",
      services: "სერვისები",
      about: "ჩემ შესახებ",
      contacts: "კონტაქტი",
    },
    hero: {
      title: "თანამედროვე ციფრული პროდუქტების შექმნა",
      subtitle:
        "პროფესიონალი Front-End დეველოპერი. ვქმნი სწრაფ, დაცულ და ადაპტურ ვებ-აპლიკაციებს React-ისა და TypeScript-ის გამოყენებით.",
      btnPrimary: "სერვისები",
      btnSecondary: "ნამუშევრები",
      btnCourses: "ყველა პროგრამა",
      btnInstructor: "ჩემ შესახებ",
    },
    features: {
      title: "ჩემი მიდგომა",
      items: [
        {
          title: "სუფთა კოდი",
          desc: "ვწერ გამართულ და მასშტაბირებად TypeScript კოდს.",
        },
        {
          title: "თანამედროვე ტექნოლოგიები",
          desc: "ვიყენებ React 19-ის, Tailwind-ისა და Supabase-ის უახლეს შესაძლებლობებს.",
        },
        {
          title: "დეტალებზე ორიენტირებული",
          desc: "თქვენი ვებსაიტი იქნება ვიზუალურად დახვეწილი.",
        },
        {
          title: "დროული ჩაბარება",
          desc: "გარანტიას გაძლევთ პროექტის დროულად დასრულებაზე.",
        },
      ],
    },
    courses: {
      title: "მენტორინგი და სწავლება",
      findTitle: "გსურს პროგრამირების სწავლა?",
      findDesc:
        "ჩემს ცოდნას დამწყებებსაც ვუზიარებ. პერსონალური მენტორინგი ნულიდან დასაქმებამდე.",
      btnFind: "პროგრამის შერჩევა",
      card: {
        duration: "ხანგრძლივობა",
        tech: "ტექნოლოგიები",
        details: "დეტალები",
        students: "მოსწავლე",
      },
      cta: {
        title: "მზად ხარ დასაწყებად?",
        desc: "დარეგისტრირდი ახლავე და დაჯავშნე ადგილი შემდეგ ნაკადში.",
        btn: "რეგისტრაცია კურსზე",
      },
    },
    courseFinder: {
      title: "დაიწყე სწავლა",
      desc: "რეგისტრაციის გავლით თქვენ დგამთ პირველ ნაბიჯს თანამედროვე ვებ-დეველოპმენტის დასაუფლებლად.",
      formTitle: "შეავსეთ დეტალები",
      labels: {
        name: "სახელი და გვარი",
        email: "ელ.ფოსტა",
        placeholderName: "თქვენი სახელი",
        placeholderEmail: "you@example.com",
      },
      btn: "რეგისტრაცია",
      sending: "იგზავნება...",
      successTitle: "წარმატებით გაიგზავნა!",
      successDesc:
        "მადლობა! თქვენი მონაცემები მიღებულია. მალე დაგიკავშირდებით.",
      btnBack: "მთავარზე დაბრუნება",
    },
    instructor: {
      expTitle: "გამოცდილება",
      skills: "ტექნოლოგიები",
      eduTitle: "განათლება",
      projects: "პროექტები",
    },
    footer: {
      title: "ვითანამშრომლოთ",
      text: "მზად ვარ ფრილანს პროექტებისა და შეკვეთებისთვის.",
      btnSubscribe: "შემატყობინე",
      copyright: "მარიამ ბუხაიძე. ყველა უფლება დაცულია.",
    },
    services: {
      title: "ვებ",
      subtitle: "დეველოპმენტი",
      desc: "ვებსაიტები, აპლიკაციები და ტექნიკური კონსულტაცია თქვენი ბიზნესისთვის.",
      customProject: "გაქვთ განსხვავებული იდეა?",
      customDesc:
        "თუ გჭირდებათ არასტანდარტული გადაწყვეტილება, მზად ვარ განვიხილო.",
      discussBtn: "პროექტის დაწყება",
      quickChat: "სწრაფი ჩატი",
      orderBtn: "შეკვეთა",
    },
    modal: {
      order: "მოთხოვნა:",
      desc: "მოკლედ აღწერეთ თქვენი პროექტი.",
      labels: {
        name: "სახელი",
        email: "ელ.ფოსტა",
        details: "პროექტის დეტალები",
      },
      btnSend: "გაგზავნა",
      success: "გაგზავნილია!",
      successDesc: "24 საათის განმავლობაში დაგიკავშირდებით.",
    },
  },
  ru: {
    nav: {
      courses: "Портфолио",
      services: "Услуги",
      about: "Обо мне",
      contacts: "Контакты",
    },
    hero: {
      title: "Разработка современных веб-решений",
      subtitle:
        "Профессиональный Front-End разработчик (React + TypeScript). Превращаю идеи в быстрые, красивые и масштабируемые веб-приложения.",
      btnPrimary: "Мои услуги",
      btnSecondary: "Портфолио",
      btnCourses: "Все программы",
      btnInstructor: "Обо мне",
    },
    features: {
      title: "Мой подход",
      items: [
        {
          title: "Чистый код",
          desc: "Пишу поддерживаемый код на TypeScript, который легко развивать.",
        },
        {
          title: "Стек технологий",
          desc: "Использую мощь React 19, Tailwind CSS и Supabase.",
        },
        {
          title: "Pixel Perfect",
          desc: "Внимание к деталям UI/UX. Идеально на любом устройстве.",
        },
        {
          title: "Соблюдение сроков",
          desc: "Четкий процесс разработки гарантирует своевременную сдачу.",
        },
      ],
    },
    courses: {
      title: "Менторство и Обучение",
      findTitle: "Хотите научиться кодить?",
      findDesc:
        "Я делюсь опытом через программы менторства. От новичка до Junior Developer.",
      btnFind: "Выбрать программу",
      card: {
        duration: "Длительность",
        tech: "Стек",
        details: "Подробнее",
        students: "студентов",
      },
      cta: {
        title: "Готовы начать?",
        desc: "Зарегистрируйтесь сейчас, чтобы забронировать место в следующем потоке.",
        btn: "Записаться на курс",
      },
    },
    courseFinder: {
      title: "Начать обучение",
      desc: "Регистрация — это ваш первый шаг к освоению современной веб-разработки.",
      formTitle: "Заполните данные",
      labels: {
        name: "ФИО",
        email: "Email адрес",
        placeholderName: "Ваше полное имя",
        placeholderEmail: "you@example.com",
      },
      btn: "Зарегистрироваться",
      sending: "Отправка...",
      successTitle: "Успешно отправлено!",
      successDesc:
        "Спасибо! Ваши данные получены. Я свяжусь с вами в ближайшее время.",
      btnBack: "На главную",
    },
    instructor: {
      expTitle: "Опыт работы",
      skills: "Навыки",
      eduTitle: "Образование",
      projects: "Проекты",
    },
    footer: {
      title: "Давайте сотрудничать",
      text: "Открыта для фриланс-проектов и предложений.",
      btnSubscribe: "Связаться",
      copyright: "Mariam Bukhaidze. Все права защищены.",
    },
    services: {
      title: "Веб",
      subtitle: "Разработка",
      desc: "Сайты под ключ, веб-приложения и технические консультации для вашего бизнеса.",
      customProject: "Есть уникальная идея?",
      customDesc:
        "Если нужно сложное или нестандартное решение, давайте обсудим.",
      discussBtn: "Начать проект",
      quickChat: "Чат",
      orderBtn: "Заказать",
    },
    modal: {
      order: "Заявка:",
      desc: "Опишите задачу, и я свяжусь с вами.",
      labels: { name: "Имя", email: "Email", details: "Детали проекта" },
      btnSend: "Отправить",
      success: "Отправлено!",
      successDesc: "Я свяжусь с вами в течение 24 часов.",
    },
  },
};

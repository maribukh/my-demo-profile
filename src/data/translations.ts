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
    workflow: {
      title: "How I Work",
      subtitle: "Process",
      steps: [
        {
          title: "Discovery",
          desc: "We discuss requirements, goals, and technical specs to create a roadmap.",
        },
        {
          title: "Development",
          desc: "I build the architecture and UI using React & TypeScript with regular updates.",
        },
        {
          title: "Testing",
          desc: "Rigorous testing for bugs, responsiveness, and performance optimization.",
        },
        {
          title: "Launch",
          desc: "Deployment to production, SEO setup, and final handover.",
        },
      ],
    },
    faq: {
      title: "Common Questions",
      items: [
        {
          q: "Do you take prepayment?",
          a: "Yes, I work with a 50% prepayment to start the project. The remaining 50% is paid after the final approval.",
        },
        {
          q: "Do you provide web design?",
          a: "I specialize in Development. For small projects, I use modern UI kits. For complex custom designs, I can recommend a partner designer.",
        },
        {
          q: "What happens if I find a bug later?",
          a: "I provide 1 month of free technical support after launch to fix any bugs found in my code.",
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
      status: {
        title: "Current Status",
        available: "Available",
        openFor: "Open for",
        types: "Full-time & Contract",
        location: "Tbilisi, Georgia",
        remote: "Relocation / Remote",
        downloadCv: "Download CV",
      },
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
      desc: "Tell me about your project preferences.",
      labels: {
        name: "Your Name",
        email: "Email Address",
        details: "Additional Details",
        company: "Company Name",
        budget: "Estimated Budget",
        time: "Timeline",
        interests: "I'm interested in:",
      },
      types: {
        person: "Personal",
        company: "Company",
      },
      placeholders: {
        budget: "Select Range",
        time: "Select Timeline",
        details: "Any specific requirements or questions?",
      },
      options: {
        budgets: ["< $500", "$500 - $1k", "$1k - $3k", "$3k+", "Not sure"],
        times: ["ASAP (Urgent)", "1-2 Weeks", "1 Month", "Flexible"],
      },
      tags: [
        "Landing Page",
        "E-commerce",
        "Web App",
        "Admin Panel",
        "API Integration",
        "Consultation",
      ],
      btnSend: "Send Request",
      success: "Request Sent!",
      successDesc: "I will contact you within 24 hours.",
    },
    terms: {
      title: "Terms &",
      subtitle: "Conditions",
      general: {
        title: "1. General Overview",
        content:
          "By working with Mariam Bukhaidze ('Developer'), you ('Client') agree to the following terms. These terms serve as a service agreement for all web development and consultation services.",
      },
      payments: {
        title: "2. Payments",
        list: [
          "Prepayment: A 50% non-refundable deposit is required to start the project.",
          "Final Payment: The remaining 50% is due upon project completion, before the final source code transfer or deployment.",
          "Hourly Work: Consultations are paid 100% in advance.",
        ],
      },
      revisions: {
        title: "3. Revisions",
        content:
          "The fixed price includes 2 rounds of revisions. Any additional changes requested by the Client after these rounds, or changes that contradict the initial brief, will be charged at an hourly rate.",
      },
      ip: {
        title: "4. Intellectual Property",
        content:
          "Upon full payment, the Client receives full ownership rights to the final source code and design. The Developer retains the right to display the project in their personal portfolio.",
      },
      deadlines: {
        title: "5. Deadlines",
        content:
          "Deadlines are estimates. The Developer is not responsible for delays caused by the Client (e.g., late feedback, missing content, or change of requirements).",
      },
      warranty: {
        title: "6. Warranty",
        content:
          "I provide a 30-day warranty period after launch. During this time, any bugs related to my code will be fixed for free. This does not cover issues caused by third-party services.",
      },
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
    workflow: {
      title: "სამუშაო პროცესი",
      subtitle: "ეტაპები",
      steps: [
        {
          title: "ანალიზი",
          desc: "განვიხილავთ მოთხოვნებს და ვქმნით ტექნიკურ გეგმას.",
        },
        {
          title: "დეველოპმენტი",
          desc: "კოდის წერა, არქიტექტურის გამართვა და UI-ის აწყობა.",
        },
        {
          title: "ტესტირება",
          desc: "შემოწმება ხარვეზებზე, სისწრაფესა და ადაპტურობაზე.",
        },
        {
          title: "გაშვება",
          desc: "პროექტის ჰოსტინგზე განთავსება და ჩაბარება.",
        },
      ],
    },
    faq: {
      title: "ხშირად დასმული კითხვები",
      items: [
        {
          q: "როგორ ხდება გადახდა?",
          a: "მუშაობას ვიწყებ 50% წინასწარი გადახდის შემდეგ. დარჩენილი 50% იფარება პროექტის ჩაბარებისას.",
        },
        {
          q: "აკეთებთ თუ არა დიზაინს?",
          a: "ჩემი პროფილი არის დეველოპმენტი. მცირე პროექტებისთვის ვიყენებ მზა UI კიტიებს. რთული დიზაინისთვის მყავს პარტნიორი დიზაინერი.",
        },
        {
          q: "რა ხდება თუ ბაგს ვიპოვი?",
          a: "პროექტის ჩაბარებიდან 1 თვის განმავლობაში გთავაზობთ უფასო ტექნიკურ მხარდაჭერას ხარვეზების გამოსასწორებლად.",
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
      status: {
        title: "ამჟამინდელი სტატუსი",
        available: "მზად ვარ მუშაობისთვის",
        openFor: "განვიხილავ:",
        types: "სრულ განაკვეთს & კონტრაქტს",
        location: "თბილისი, საქართველო",
        remote: "რელოკაცია / დისტანციური",
        downloadCv: "CV-ს ჩამოტვირთვა",
      },
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
        company: "კომპანია",
        budget: "ბიუჯეტი",
        time: "ვადები",
        interests: "მაინტერესებს:",
      },
      types: {
        person: "პერსონალური",
        company: "კომპანია",
      },
      placeholders: {
        budget: "აირჩიეთ ბიუჯეტი",
        time: "აირჩიეთ ვადები",
        details: "ნებისმიერი სპეციფიკური მოთხოვნა...",
      },
      options: {
        budgets: [
          "< 500₾",
          "500₾ - 1000₾",
          "1000₾ - 3000₾",
          "3000₾+",
          "არ ვიცი",
        ],
        times: ["სასწრაფოდ", "1-2 კვირა", "1 თვე", "მოქნილი"],
      },
      tags: [
        "Lending Page",
        "E-commerce",
        "Web App",
        "სადმინისტრაციო პანელი",
        "API ინტეგრაცია",
        "კონსულტაცია",
      ],
      btnSend: "გაგზავნა",
      success: "გაგზავნილია!",
      successDesc: "24 საათის განმავლობაში დაგიკავშირდებით.",
    },
    terms: {
      title: "წესები და",
      subtitle: "პირობები",
      general: {
        title: "1. ზოგადი მიმოხილვა",
        content:
          "მარიამ ბუხაიძესთან ('დეველოპერი') მუშაობისას, თქვენ ('კლიენტი') ეთანხმებით შემდეგ პირობებს. ეს პირობები წარმოადგენს მომსახურების ხელშეკრულებას.",
      },
      payments: {
        title: "2. გადახდა",
        list: [
          "წინასწარი გადახდა: პროექტის დასაწყებად საჭიროა 50% ავანსი, რომელიც არ ბრუნდება.",
          "საბოლოო გადახდა: დარჩენილი 50% იფარება პროექტის დასრულებისას, კოდის გადაცემამდე.",
          "საათობრივი სამუშაო: კონსულტაციები ანაზღაურდება 100% წინასწარ.",
        ],
      },
      revisions: {
        title: "3. შესწორებები",
        content:
          "ფიქსირებული ფასი მოიცავს შესწორებების 2 რაუნდს. ნებისმიერი დამატებითი ცვლილება, რომელიც სცდება თავდაპირველ შეთანხმებას, ანაზღაურდება საათობრივად.",
      },
      ip: {
        title: "4. ინტელექტუალური საკუთრება",
        content:
          "სრული გადახდის შემდეგ, კლიენტი იღებს სრულ უფლებას კოდსა და დიზაინზე. დეველოპერს უფლება აქვს გამოიყენოს პროექტი პორტფოლიოში.",
      },
      deadlines: {
        title: "5. ვადები",
        content:
          "ვადები არის სავარაუდო. დეველოპერი არ არის პასუხისმგებელი კლიენტის მიერ გამოწვეულ შეფერხებებზე (მასალების დაგვიანება, პასუხის დაგვიანება).",
      },
      warranty: {
        title: "6. გარანტია",
        content:
          "პროექტის ჩაბარებიდან 30 დღის განმავლობაში, კოდთან დაკავშირებული ნებისმიერი ხარვეზი გასწორდება უფასოდ. ეს არ ეხება მესამე მხარის სერვისებს.",
      },
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
    workflow: {
      title: "Как я работаю",
      subtitle: "Процесс",
      steps: [
        {
          title: "Анализ",
          desc: "Обсуждаем требования, цели и составляем техническое задание.",
        },
        {
          title: "Разработка",
          desc: "Пишу чистый код, настраиваю архитектуру и верстаю интерфейс.",
        },
        {
          title: "Тестирование",
          desc: "Проверка на баги, адаптивность и скорость загрузки.",
        },
        {
          title: "Запуск",
          desc: "Деплой на сервер, настройка SEO и передача проекта.",
        },
      ],
    },
    faq: {
      title: "Частые вопросы",
      items: [
        {
          q: "Нужна ли предоплата?",
          a: "Да, я работаю с предоплатой 50% перед началом. Остальные 50% оплачиваются после сдачи проекта.",
        },
        {
          q: "Делаете ли вы дизайн?",
          a: "Я специализируюсь на разработке. Для небольших проектов использую готовые UI-киты. Для сложных — привлекаю дизайнера.",
        },
        {
          q: "Что если найдутся баги?",
          a: "Я предоставляю 1 месяц бесплатной техподдержки после запуска для исправления любых ошибок в коде.",
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
      status: {
        title: "Текущий статус",
        available: "Открыта к предложениям",
        openFor: "Рассматриваю:",
        types: "Полный день и Контракт",
        location: "Тбилиси, Грузия",
        remote: "Релокация / Удаленка",
        downloadCv: "Скачать резюме",
      },
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
      labels: {
        name: "Имя",
        email: "Email",
        details: "Детали проекта",
        company: "Компания",
        budget: "Бюджет",
        time: "Сроки",
        interests: "Меня интересует:",
      },
      types: {
        person: "Личный",
        company: "Компания",
      },
      placeholders: {
        budget: "Выберите бюджет",
        time: "Выберите сроки",
        details: "Любые требования или вопросы...",
      },
      options: {
        budgets: ["< $500", "$500 - $1k", "$1k - $3k", "$3k+", "Не знаю"],
        times: ["Срочно", "1-2 Недели", "1 Месяц", "Гибко"],
      },
      tags: [
        "Лендинг",
        "E-commerce",
        "Веб-приложение",
        "Админ-панель",
        "API Интеграция",
        "Консультация",
      ],
      btnSend: "Отправить",
      success: "Отправлено!",
      successDesc: "Я свяжусь с вами в течение 24 часов.",
    },
    terms: {
      title: "Условия",
      subtitle: "работы",
      general: {
        title: "1. Общие положения",
        content:
          "Начиная работу с Мариам Бухаидзе ('Разработчик'), вы ('Клиент') соглашаетесь с нижеследующими условиями.",
      },
      payments: {
        title: "2. Оплата",
        list: [
          "Предоплата: Для начала работы требуется невозвратный депозит 50%.",
          "Финальный расчет: Оставшиеся 50% оплачиваются после завершения проекта, перед передачей исходного кода.",
          "Почасовая работа: Консультации оплачиваются 100% вперед.",
        ],
      },
      revisions: {
        title: "3. Правки",
        content:
          "Фиксированная цена включает 2 итерации правок. Любые дополнительные изменения или изменения, противоречащие изначальному ТЗ, оплачиваются почасово.",
      },
      ip: {
        title: "4. Интеллектуальная собственность",
        content:
          "После полной оплаты Клиент получает полные права на исходный код и дизайн. Разработчик оставляет за собой право демонстрировать проект в портфолио.",
      },
      deadlines: {
        title: "5. Сроки",
        content:
          "Сроки являются оценочными. Разработчик не несет ответственности за задержки, вызванные Клиентом (долгое согласование, отсутствие материалов).",
      },
      warranty: {
        title: "6. Гарантия",
        content:
          "Я предоставляю 30 дней гарантии после запуска. В этот период любые баги в моем коде исправляются бесплатно.",
      },
    },
  },
};

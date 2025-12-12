# ⚡Professional Portfolio

![React](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white)

> A high-performance personal portfolio and service booking platform. Built with a modern tech stack to demonstrate advanced Front-End capabilities, architectural skills, and UI/UX sensitivity.

🔴 **Live Demo:** [https://my-demo-profile.vercel.app](https://my-demo-profile.vercel.app)

---

## 🌟 Key Features

This isn't just a static landing page. It's a full-featured web application:

*   **🌍 Internationalization (i18n):** Full support for English, Georgian, and Russian languages via Context API.
*   **🤖 Smart Notifications:** Integrated **Telegram Bot** via Vercel Serverless Functions to receive client orders instantly.
*   **💾 Database Integration:** All orders and subscriptions are stored in **Supabase (PostgreSQL)** for reliability.
*   **🎨 Cyberpunk UI:** Custom design with neon glassmorphism, Framer Motion animations, and a custom interactive cursor.
*   **📱 Mobile First:** Fully responsive layout with a custom side-drawer menu for mobile devices.
*   **⚡ Performance:** Optimized with Vite, WebP assets, and React code-splitting.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, Tailwind CSS, Framer Motion |
| **Backend (BaaS)** | Supabase (PostgreSQL), Vercel Serverless Functions (API) |
| **State Management** | React Context API |
| **Forms & Alerts** | Custom Hooks, Telegram API |
| **Deployment** | Vercel (CI/CD) |

---

## 📂 Project Structure

```text
src/
├── api/             # Serverless functions (Telegram bot logic)
├── assets/          # Optimized images and mocks
├── components/      # Reusable UI components (Modals, Buttons, Cards)
├── context/         # Global state (Language Context)
├── data/            # Static data and Translations (en/ka/ru)
├── pages/           # Route pages (Home, Terms, 404)
└── main.tsx         # App entry point with Providers

```

**© 2025 Mariam Bukhaidze. All Rights Reserved.**

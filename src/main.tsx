import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HelmetProvider>
      <LanguageProvider>
        <App />
        <Analytics />
      </LanguageProvider>
    </HelmetProvider>
  </BrowserRouter>
);
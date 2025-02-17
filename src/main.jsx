// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LanguageProvider from "./contexts/LanguageContext"; // Use default import
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

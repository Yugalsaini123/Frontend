// src/components/LanguageSwitcher.jsx
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "../styles.css";

export const LanguageSwitcher = () => {
  const { language, setLanguage, supportedLanguages } = useContext(LanguageContext);

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="language-switcher"
    >
      {Object.entries(supportedLanguages).map(([code, name]) => (
        <option key={code} value={code}>{name}</option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
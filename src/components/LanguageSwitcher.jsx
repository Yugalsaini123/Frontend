// src/components/LanguageSwitcher.jsx
import { useContext } from "react";
import { LanguageContext, supportedLanguages } from "../contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="p-2 border rounded bg-white"
    >
      {Object.entries(supportedLanguages).map(([code, name]) => (
        <option key={code} value={code}>{name}</option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
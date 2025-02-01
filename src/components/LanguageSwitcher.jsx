// src/components/LanguageSwitcher.jsx
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="p-2 border rounded"
    >
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="bn">Bengali</option>
    </select>
  );
};

export default LanguageSwitcher;
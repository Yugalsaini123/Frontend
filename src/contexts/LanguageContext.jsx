// src/contexts/LanguageContext.jsx
import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const supportedLanguages = {
  en: 'English',
  hi: 'हिन्दी (Hindi)',
  bn: 'বাংলা (Bengali)',
  es: 'Español (Spanish)',
  fr: 'Français (French)',
  de: 'Deutsch (German)',
  ja: '日本語 (Japanese)',
  ar: 'العربية (Arabic)',
  pt: 'Português (Portuguese)',
  ru: 'Русский (Russian)',
  zh: '中文 (Chinese)'
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, supportedLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

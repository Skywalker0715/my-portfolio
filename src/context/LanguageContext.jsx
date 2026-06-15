import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "id";

  const saved = window.localStorage.getItem("portfolio-language");
  if (saved === "id" || saved === "en") return saved;

  const browserLang = window.navigator.language?.toLowerCase() || "";
  return browserLang.startsWith("en") ? "en" : "id";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLanguage);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", lang);
    document.documentElement.lang = lang;
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  const value = useMemo(() => {
    return {
      lang,
      setLang,
      toggleLanguage: () => setLang((current) => (current === "id" ? "en" : "id")),
      isEnglish: lang === "en",
      t
    };
  }, [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};

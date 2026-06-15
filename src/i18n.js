import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { TRANSLATIONS } from "./data/translations";

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "id";

  const saved = window.localStorage.getItem("portfolio-language");
  if (saved === "id" || saved === "en") return saved;

  const browserLang = window.navigator.language?.toLowerCase() || "";
  return browserLang.startsWith("en") ? "en" : "id";
};

const resources = Object.fromEntries(
  Object.entries(TRANSLATIONS).map(([lng, translation]) => [
    lng,
    { translation }
  ])
);

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "id",
  interpolation: {
    escapeValue: false
  },
  defaultNS: "translation",
  ns: ["translation"],
  react: {
    useSuspense: false
  }
});

export default i18n;

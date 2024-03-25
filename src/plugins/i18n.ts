import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import tk from "../locales/tk.json";

export const defaultNS = "translations";
export const resources = {
  tk: {
    translations: tk,
  },
  en: {
    translations: en,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: "tk",
  lng: "tk",
  compatibilityJSON: "v3",
  resources: {
    tk: {
      translations: tk,
    },
    en: {
      translations: en,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  interpolation: {
    escapeValue: false,
  },
});

i18n.languages = ["tk", "en"];

export default i18n;

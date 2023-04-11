import { initReactI18next } from "react-i18next";
import tansRu from "./ru.json";
import tansUz from "./uz.json";
import transEn from "./en.json";
import i18n from "i18next";

const resources = {
  ru: {
    translation: tansRu,
  },
  uz: {
    translation: tansUz,
  },
  eng: {
    translation: transEn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng:
    localStorage.getItem("language") !== undefined
      ? localStorage.getItem("language")
      : "",
  fallbackLng: "ru",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

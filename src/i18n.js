import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    resources: {
      en: {
        translation: {
          greeting: "Welcome to React and react-i18next",
        },
      },
      ru: {
        translation: {
          greeting: "Добро пожаловать в React и react-i18next",
        },
      },
    },
  });

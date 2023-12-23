import commonEN from "assets/translations/en/common.json";
import commonJP from "assets/translations/jp/common.json";
import commonVI from "assets/translations/vi/common.json";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    defaultNS: ["common"],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        common: commonEN,
      },
      jp: {
        common: commonJP,
      },
      vi: {
        common: commonVI,
      },
    },
  });

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      about_us: "About Us",
      workplaces: "Workplaces",
      facilities: "Facilities",
      contact_us: "Contact Us",
      lang_en: "English",
      lang_ka: "ქართული",
      language_en: "English",
      language_ka: "ქართული",
    },
  },
  ka: {
    translation: {
      about_us: "ჩვენ შესახებ",
      workplaces: "სამუშაო ადგილები",
      facilities: "სერვისები",
      contact_us: "კონტაქტი",
      lang_en: "English",
      lang_ka: "ქართული",
      language_en: "English",
      language_ka: "ქართული",
    },
  },
};

const savedLng =
  typeof window !== "undefined" ? localStorage.getItem("lng") : null;

i18n.use(initReactI18next).init({
  resources,
  lng: savedLng || "ka",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
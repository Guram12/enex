import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      about_us: 'About Us',
      workplaces: 'Workplaces',
      facilities: 'Facilities',
      contact_us: 'Contact Us',
    },
  },
  ka: {
    translation: {
      about_us: 'ჩვენ შესახებ',
      workplaces: 'სამუშაო სივრცეები',
      facilities: 'სერვისები',
      contact_us: 'დაგვიკავშირდით',
    },
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;

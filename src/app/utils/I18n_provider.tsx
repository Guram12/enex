'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './I18n';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('language') || 'en';
      if (savedLang !== i18n.language) {
        i18n.changeLanguage(savedLang);
      }
    } catch {
      // localStorage unavailable (e.g. private browsing)
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

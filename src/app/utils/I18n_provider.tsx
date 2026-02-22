'use client';

import { useEffect } from 'react';
import './I18n';
import i18n from './I18n';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  useEffect(() => {
    const savedLng = localStorage.getItem("lng");
    if (savedLng && savedLng !== i18n.language) {
      i18n.changeLanguage(savedLng);
    }
  }, []);

  return <>{children}</>;
}
'use client';

import { useEffect, useState } from 'react';
import './I18n';
import i18n from './I18n';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLng = localStorage.getItem('lng') as 'en' | 'ka' | null;
    if (savedLng && savedLng !== i18n.language) {
      i18n.changeLanguage(savedLng);
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}
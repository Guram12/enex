'use client'

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../utils/I18n';

import styles from './Header.module.css';
import logo from '../../../public/logo.svg';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<string>('en');
  const { t } = useTranslation();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('language') || 'en';
      setLang(savedLang);
    } catch {
      // localStorage unavailable (e.g. private browsing)
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ka' : 'en';
    setLang(newLang);
    i18n.changeLanguage(newLang);
    try {
      localStorage.setItem('language', newLang);
    } catch {
      // localStorage unavailable (e.g. private browsing)
    }
  };



  return (
    <header className={`${styles.main_container} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inside_main_cont} >
        <div className={styles.logo_cont}>
          <img src={logo.src} alt="logo" className={styles.logo} />
        </div>

        <div className={styles.header_buttons_cont} >
          <button className={styles.header_button} suppressHydrationWarning>{t('about_us')}</button>
          <button className={styles.header_button} suppressHydrationWarning>{t('workplaces')}</button>
          <button className={styles.header_button} suppressHydrationWarning>{t('facilities')}</button>
          <button className={styles.header_button} suppressHydrationWarning>{t('contact_us')}</button>
          <button
            className={styles.header_button}
            onClick={toggleLanguage}
            suppressHydrationWarning
            aria-label={lang === 'en' ? 'Switch to Georgian' : 'Switch to English'}
          >
            {lang === 'en' ? '🇬🇪' : '🇺🇸'}
          </button>
        </div>


      </div>
    </header>
  );
}






















'use client'

import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import logo from '../../../public/logo.svg';
import { useTranslation } from "react-i18next";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'ka'>((i18n.language as 'en' | 'ka') || 'ka');
  const [menuOpen, setMenuOpen] = useState(false);

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: 'en' | 'ka') => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
    setLang(lng);
  };

  const handleLangChange = (event: SelectChangeEvent) => {
    changeLanguage(event.target.value as 'en' | 'ka');
  };

  const getFlag = (lng: 'en' | 'ka') => (lng === 'en' ? '🇺🇸' : '🇬🇪');

  const handleLogoScroll = () => {
    setMenuOpen(false);
    if (pathname !== "/") {
      localStorage.setItem("scrollUp", "true");
      router.push("/");
    } else {
      window.dispatchEvent(new Event("scrollUp"));
    }
  };

  const handleWorkplacesClick = () => {
    setMenuOpen(false);
    if (pathname !== "/") {
      localStorage.setItem("scrollToWorkplaces", "true");
      router.push("/");
    } else {
      window.dispatchEvent(new Event("scrollToWorkplaces"));
    }
  };

  const handleStagesClick = () => {
    setMenuOpen(false);
    if (pathname !== "/") {
      localStorage.setItem("scrollToStages", "true");
      router.push("/");
    } else {
      window.dispatchEvent(new Event("scrollToStages"));
    }
  };

  const LangSelector = () => (
    <FormControl variant="standard" size="small" sx={{ minWidth: 56 }}>
      <Select
        value={lang}
        onChange={handleLangChange}
        disableUnderline
        aria-label="Language"
        renderValue={(value) => (
          <span style={{ fontSize: 18, lineHeight: 1 }}>
            {getFlag(value as 'en' | 'ka')}
          </span>
        )}
        MenuProps={{
          disableScrollLock: true,
          PaperProps: {
            sx: {
              mt: 1,
              borderRadius: '10px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              '& .MuiMenuItem-root': {
                minHeight: '36px',
                justifyContent: 'center',
              },
            },
          },
        }}
        sx={{
          minWidth: 48,
          borderRadius: '8px',
          '& .MuiSelect-select': {
            py: '4px',
            pr: '22px',
            pl: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '&:before, &:after': { display: 'none' },
          '& .MuiSvgIcon-root': { fontSize: 18, right: 2 },
          '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' },
        }}
      >
        <MenuItem value="en" aria-label={t('language_en')}>
          <span style={{ fontSize: 18, lineHeight: 1 }}>🇺🇸 EN</span>
        </MenuItem>
        <MenuItem value="ka" aria-label={t('language_ka')}>
          <span style={{ fontSize: 18, lineHeight: 1 }}>🇬🇪 GE</span>
        </MenuItem>
      </Select>
    </FormControl>
  );

  return (
    <header className={`${styles.main_container} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inside_main_cont}>

        {/* Logo */}
        <div className={styles.logo_cont} onClick={handleLogoScroll}>
          <Link href="/">
            <img src={logo.src} alt="logo" className={styles.logo} />
          </Link>
        </div>

        {/* Desktop nav */}
        <div className={styles.header_buttons_cont}>
          <button className={styles.header_button}>{t('about_us')}</button>
          <button className={styles.header_button} onClick={handleWorkplacesClick}>{t('services')}</button>
          <button className={styles.header_button} onClick={handleStagesClick}>{t('stages')}</button>
          <Link href="/contact">
            <button className={styles.header_button}>{t('contact_us')}</button>
          </Link>
          <LangSelector />
        </div>

        {/* Burger button - mobile only */}
        <button
          className={`${styles.burger_button} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className={styles.burger_line} />
          <span className={styles.burger_line} />
          <span className={styles.burger_line} />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav className={`${styles.mobile_menu} ${menuOpen ? styles.open : ''}`}>
        <button className={styles.mobile_menu_button}>{t('about_us')}</button>
        <button className={styles.mobile_menu_button} onClick={handleWorkplacesClick}>{t('services')}</button>
        <button className={styles.mobile_menu_button} onClick={handleStagesClick}>{t('stages')}</button>
        <Link href="/contact" style={{ width: '100%' }}>
          <button className={styles.mobile_menu_button} onClick={() => setMenuOpen(false)}>
            {t('contact_us')}
          </button>
        </Link>
        <div className={styles.mobile_lang_cont}>
          <LangSelector />
        </div>
      </nav>
    </header>
  );
}
'use client'

import { useEffect, useState } from 'react';

import styles from './Header.module.css';
import logo from '../../../public/logo.svg';
import { useTranslation } from "react-i18next";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';



export default function Header() {
  const { t, i18n } = useTranslation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'ka'>((i18n.language as 'en' | 'ka') || 'ka');

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


  const changeLanguage = (lng: 'en' | 'ka') => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
    setLang(lng);
  };

  const handleLangChange = (event: SelectChangeEvent) => {
    changeLanguage(event.target.value as 'en' | 'ka');
  };

  const getFlag = (lng: 'en' | 'ka') => (lng === 'en' ? '🇺🇸' : '🇬🇪');

  return (
    <header className={`${styles.main_container} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inside_main_cont}>
        <div className={styles.logo_cont}>
          <Link href="/">
          <img src={logo.src} alt="logo" className={styles.logo} />
          </Link>
        </div>

        <div className={styles.header_buttons_cont}>
          <button className={styles.header_button}>{t('about_us')}</button>
          <button className={styles.header_button}>{t('workplaces')}</button>
          <button className={styles.header_button}>{t('facilities')}</button>
          <Link href="/contact">
            <button className={styles.header_button}>{t('contact_us')}</button>
          </Link>

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
                <span style={{ fontSize: 18, lineHeight: 1 }}>🇬🇪 GE </span>
              </MenuItem>
            </Select>
          </FormControl>
        </div>

      </div>
    </header>
  );
}






















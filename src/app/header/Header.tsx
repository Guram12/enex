'use client'

import { useEffect, useState } from 'react';

import styles from './Header.module.css';
import logo from '../../../public/logo.svg';




export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);


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

  return (
    <header className={`${styles.main_container} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inside_main_cont} >
        <div className={styles.logo_cont}>
          <img src={logo.src} alt="logo" className={styles.logo} />
        </div>

        <div className={styles.header_buttons_cont} >
          <button className={styles.header_button} >About Us</button>
          <button className={styles.header_button} >workplaces</button>
          <button className={styles.header_button} >Facilities</button>
          <button className={styles.header_button} >Contact Us</button>
        </div>


      </div>
    </header>
  );
}






















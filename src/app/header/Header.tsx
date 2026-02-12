'use client'


import styles from './Header.module.css';
import logo from '../../../public/logo.svg';




export default function Header() {
  return (
    <header className={styles.main_container}>
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






















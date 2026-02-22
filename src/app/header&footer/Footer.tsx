import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.footer_section}>
        <span className={styles.footer_logo}>ENEX</span>
      </div>

      <div className={styles.footer_section}>
        <p className={styles.footer_contact_title}>Contact</p>
        <p className={styles.footer_text}>📞 551 40 40 30</p>
        <p className={styles.footer_text}>✉️ info@enex.com</p>
      </div>

      <div className={styles.footer_divider} />
      <p className={styles.footer_copyright}>
        Copyright © 2024 ENEX. All rights reserved.
      </p>

    </footer>
  );
}
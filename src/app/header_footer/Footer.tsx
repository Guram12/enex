import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <p>
          Contact: <a href="tel:+995551404030">551 40 40 30</a>
        </p>
        <p>
          Email: <a href="mailto:info@enex.com">info@enex.com</a>
        </p>
        <p>© {year} Enex. All rights reserved.</p>
      </div>
    </footer>
  );
}
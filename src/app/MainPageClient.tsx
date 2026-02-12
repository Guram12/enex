'use client';


import "./globals.css";
import Header from "./header/Header";
import styles from "./page.module.css";



export default function MainPageClient() {

  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
      </main>
    </div>
  );
}





"use client";

import "./globals.css";
import Header from "./header/Header";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function MainPageClient() {


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const backgroundContainer = document.querySelector(
        `.${styles.background_image_container}`
      ) as HTMLElement; // Cast to HTMLElement
      if (backgroundContainer) {
        backgroundContainer.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Adjust the multiplier for speed
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />

        <div className={styles.background_image_container}>
          <h1 className={styles.title}>Welcome to Enex</h1>
          <p className={styles.description}>
            Discover the future of work with Enex - Your ultimate coworking space
            solution.
          </p>
        </div>

        <div className={styles.experiance_container}>
          <p className={styles.experiance_title}>
            Our team brings years of experience in delivering scalable,
            high-performance technology solutions for startups and enterprise
            clients alike. From concept to deployment, we focus on building
            secure, user-centric products that solve real-world problems.
          </p>
          <p className={styles.experiance_title}>
            We specialize in modern web development, cloud infrastructure,
            and system architecture design. By leveraging cutting-edge frameworks
            and agile methodologies, we ensure fast iteration cycles, transparent
            communication, and measurable results.
          </p>
        </div>
      </main>
    </div>
  );
}





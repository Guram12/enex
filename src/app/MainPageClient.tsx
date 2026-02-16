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
          <div className={styles.background_content}>
            <h1 className={styles.title}>Welcome to Enex</h1>
            <p className={styles.description}>
              Discover the future of work with Enex - Your ultimate coworking space
              solution.
            </p>
          </div>
        </div>

        <div className={styles.experiance_container}>

          <p className={styles.experiance_title}>
            Our team brings years of experience in delivering scalable,
            high-performance technology solutions for startups and enterprise
            clients alike. From concept to deployment, we focus on building
            secure, user-centric products that solve real-world problems.
          </p>

          <div className={styles.all_experiance_cont} >

            <div className={styles.experiance_item}>
              <div className={styles.experiance_item_content} >
                <h2 className={styles.experiance_item_title}>10 </h2>
                <p className={styles.item_text}>Years of Experience</p>
              </div>
              <div className={styles.thick_line}></div>
            </div>


            <div className={styles.experiance_item}>
              <div className={styles.experiance_item_content} >
                <h2 className={styles.experiance_item_title}>400 </h2>
                <p className={styles.item_text}>Satisfied Customers</p>
              </div>
              <div className={styles.thick_line}></div>
            </div>

            <div className={styles.experiance_item}>
              <div className={styles.experiance_item_content} >
                <h2 className={styles.experiance_item_title}>15</h2>
                <p className={styles.item_text}>Staff Members</p>
              </div>
              <div className={styles.thick_line}></div>
            </div>

            <div className={styles.experiance_item}>
              <div className={styles.experiance_item_content} >
                <h2 className={styles.experiance_item_title}>600</h2>
                <p className={styles.item_text}>Clean Spaces</p>
              </div>
              <div className={styles.thick_line}></div>
            </div>

          </div>



          <div className={styles.experiance_header_container}>
            <h1 className={styles.experiance_header}>WE WORK WITH ALL TYPES OF WORKPLACES</h1>
              <button className={styles.experiance_button}>Learn More</button>
          </div>






        </div>
      </main>
    </div>
  );
}





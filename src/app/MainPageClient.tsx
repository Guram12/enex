"use client";

import "./globals.css";
import Header from "./header/Header";
import styles from './MainPage.module.css';
import { useEffect } from "react";
import audit_image from "../app/assets/audit.jpg";
import designe_image from "../app/assets/designe.jpg";
import electrical_image from "../app/assets/electrical.png";
import fire_alarm_image from "../app/assets/fire-alarm.jpg";
import hvac_image from "../app/assets/hvac.jpeg";
import supervision_image from "../app/assets/supervision.jpg";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";






export default function MainPageClient() {


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const backgroundContainer = document.querySelector(
        `.${styles.background_image_container}`
      ) as HTMLElement;
      if (backgroundContainer) {
        backgroundContainer.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    // Initialize the background position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <Header />

        {/*=========== background image container ========= */}
        <div className={styles.background_image_container}>
        </div>
        {/* ===================================================== */}


        <div className={styles.background_content}>
          <div>
            <h1 className={styles.title}>Welcome to Enex</h1>
            <p className={styles.description}>
              Discover the future of work with Enex - Your ultimate coworking space
              solution.
            </p>
            <button className={styles.contact_button} >Start Your Project With Us</button>
          </div>

          <div className={styles.social_icons_container}>
            <FaFacebookF color="white" size={24} className={styles.social_icon} />
            <AiFillInstagram color="white" size={24} className={styles.social_icon} />
            <GrLinkedin color="white" size={22} className={styles.social_icon} />
          </div>

        </div>




        <div className={styles.experiance_container}>
          <>
            {/* <p className={styles.experiance_title}>
            Our team brings years of experience in delivering scalable,
            high-performance technology solutions for startups and enterprise
            clients alike. From concept to deployment, we focus on building
            secure, user-centric products that solve real-world problems.
          </p> */}

            {/* <div className={styles.all_experiance_cont} >

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

          </div> */}

          </>

          <div className={styles.experiance_header_container}>
            <h1 className={styles.experiance_header}>WE WORK WITH ALL TYPES OF WORKPLACES</h1>
          </div>


          <div className={styles.experiance_image_container}>
            {/* 1 image */}
            <div className={styles.each_image_cont} >
              <div className={styles.image_wrapper} >
                <img
                  src={fire_alarm_image.src}
                  alt="Fire alarm image"
                  className={styles.experiance_image}
                />
              </div>
              <p className={styles.image_text}>Fire alarm</p>
              <div className={styles.image_thick_line}></div>
            </div>

            {/* 2 image */}
            <div className={styles.each_image_cont} >
              <div className={styles.image_wrapper} >
                <img
                  src={electrical_image.src}
                  alt="Electrical image"
                  className={styles.experiance_image}
                />
              </div>
              <p className={styles.image_text}>Electrical</p>
              <div className={styles.image_thick_line}></div>
            </div>

            {/* 3 image */}
            <div className={styles.each_image_cont} >
              <div className={styles.image_wrapper} >
                <img
                  src={hvac_image.src}
                  alt="Hvac image"
                  className={styles.experiance_image}
                />
              </div>
              <p className={styles.image_text}>Hvac</p>
              <div className={styles.image_thick_line}></div>
            </div>

            {/* 4 image */}
            <div className={styles.each_image_cont} >
              <div className={styles.image_wrapper} >
                <img
                  src={designe_image.src}
                  alt="Design image"
                  className={styles.experiance_image}
                />
              </div>
              <p className={styles.image_text}>Design</p>
              <div className={styles.image_thick_line}></div>
            </div>

            {/* 5 image */}
            <div className={styles.each_image_cont} >
              <div className={styles.image_wrapper} >
                <img
                  src={supervision_image.src}
                  alt="Supervision image"
                  className={styles.experiance_image}
                />
              </div>
              <p className={styles.image_text}>Supervision</p>
              <div className={styles.image_thick_line}></div>
            </div>

            {/* 6 image */}
            <div className={styles.each_image_cont} >
              <div className={styles.image_wrapper} >
                <img
                  src={audit_image.src}
                  alt="Audit image"
                  className={styles.experiance_image}
                />
              </div>
              <p className={styles.image_text}>Audit</p>
              <div className={styles.image_thick_line}></div>
            </div>
          </div>




        </div>
      </main>
    </div>
  );
}





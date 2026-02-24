"use client";

import "./globals.css";
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
import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";




export default function MainPageClient() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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




  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {/*=========== background image container ========= */}
        <div className={styles.background_image_container}>
        </div>
        {/* ===================================================== */}


        <div className={styles.background_content}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              Welcome to Enex
            </motion.h1>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              Discover the future of work with Enex - Your ultimate coworking space
              solution.
            </motion.p>

            <motion.button
              className={styles.contact_button}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project With Us
            </motion.button>
          </motion.div>

          <motion.div
            className={styles.social_icons_container}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            <motion.span whileHover={{ scale: 1.2, y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
              <FaFacebookF color="white" size={24} className={styles.social_icon} />
            </motion.span>
            <motion.span whileHover={{ scale: 1.2, y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
              <AiFillInstagram color="white" size={24} className={styles.social_icon} />
            </motion.span>
            <motion.span whileHover={{ scale: 1.2, y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
              <GrLinkedin color="white" size={22} className={styles.social_icon} />
            </motion.span>
          </motion.div>
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


          <motion.div
            className={styles.experiance_image_container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* 1 image */}
            <motion.div className={styles.each_image_cont} variants={cardVariants} custom={0}>
              <div className={styles.image_wrapper}>
                <img src={fire_alarm_image.src} alt="Fire alarm image" className={styles.experiance_image} />
              </div>
              <p className={styles.image_text}>Fire alarm</p>
              <div className={styles.image_thick_line}></div>
            </motion.div>

            {/* 2 image */}
            <motion.div className={styles.each_image_cont} variants={cardVariants} custom={1}>
              <div className={styles.image_wrapper}>
                <img src={electrical_image.src} alt="Electrical image" className={styles.experiance_image} />
              </div>
              <p className={styles.image_text}>Electrical</p>
              <div className={styles.image_thick_line}></div>
            </motion.div>

            {/* 3 image */}
            <motion.div className={styles.each_image_cont} variants={cardVariants} custom={2}>
              <div className={styles.image_wrapper}>
                <img src={hvac_image.src} alt="Hvac image" className={styles.experiance_image} />
              </div>
              <p className={styles.image_text}>Hvac</p>
              <div className={styles.image_thick_line}></div>
            </motion.div>

            {/* 4 image */}
            <motion.div className={styles.each_image_cont} variants={cardVariants} custom={3}>
              <div className={styles.image_wrapper}>
                <img src={designe_image.src} alt="Design image" className={styles.experiance_image} />
              </div>
              <p className={styles.image_text}>Design</p>
              <div className={styles.image_thick_line}></div>
            </motion.div>

            {/* 5 image */}
            <motion.div className={styles.each_image_cont} variants={cardVariants} custom={4}>
              <div className={styles.image_wrapper}>
                <img src={supervision_image.src} alt="Supervision image" className={styles.experiance_image} />
              </div>
              <p className={styles.image_text}>Supervision</p>
              <div className={styles.image_thick_line}></div>
            </motion.div>

            {/* 6 image */}
            <motion.div className={styles.each_image_cont} variants={cardVariants} custom={5}>
              <div className={styles.image_wrapper}>
                <img src={audit_image.src} alt="Audit image" className={styles.experiance_image} />
              </div>
              <p className={styles.image_text}>Audit</p>
              <div className={styles.image_thick_line}></div>
            </motion.div>
          </motion.div>



          <div className={styles.work_steps_container}>
            <h1 className={styles.work_steps_header}>{t("work_steps.header")}</h1>

            <div className={styles.work_steps_child_cont}>
              <div className={styles.work_steps}>
                <h2 className={styles.work_steps_title}>{t("work_steps.step1.title")}</h2>
                <h3 className={styles.work_steps_subtitle}>{t("work_steps.step1.subtitle")}</h3>
                <ul className={styles.work_steps_list}>
                  <li className={styles.work_steps_list_item}>{t("work_steps.step1.item1")}</li>
                  <li className={styles.work_steps_list_item}>{t("work_steps.step1.item2")}</li>
                  <li className={styles.work_steps_list_item}>
                    {t("work_steps.step1.item3")}
                    <br /> {t("work_steps.step1.item3_line1")}
                    <br /> {t("work_steps.step1.item3_line2")}
                    <br /> {t("work_steps.step1.item3_line3")}
                  </li>
                </ul>
              </div>

              <div className={styles.work_steps}>
                <h2 className={styles.work_steps_title}>{t("work_steps.step2.title")}</h2>
                <h3 className={styles.work_steps_subtitle}>{t("work_steps.step2.subtitle")}</h3>
                <ul className={styles.work_steps_list}>
                  <li className={styles.work_steps_list_item}>{t("work_steps.step2.item1")}</li>
                  <li className={styles.work_steps_list_item}>{t("work_steps.step2.item2")}</li>
                  <li className={styles.work_steps_list_item}>
                    {t("work_steps.step2.item3")}
                    <br /> {t("work_steps.step2.item3_line1")}
                    <br /> {t("work_steps.step2.item3_line2")}
                    <br /> {t("work_steps.step2.item3_line3")}
                    <br /> {t("work_steps.step2.item3_line4")}
                  </li>
                </ul>
              </div>

              <div className={styles.work_steps}>
                <h2 className={styles.work_steps_title}>{t("work_steps.step3.title")}</h2>
                <h3 className={styles.work_steps_subtitle}>{t("work_steps.step3.subtitle")}</h3>
                <ul className={styles.work_steps_list}>
                  <li className={styles.work_steps_list_item}>{t("work_steps.step3.item1")}</li>
                  <li className={styles.work_steps_list_item}>{t("work_steps.step3.item2")}</li>
                  <li className={styles.work_steps_list_item}>{t("work_steps.step3.item3")}</li>
                  <li className={styles.work_steps_list_item}>{t("work_steps.step3.item4")}</li>
                </ul>
              </div>

              <div className={styles.work_steps}>
                <h2 className={styles.work_steps_title}>{t("work_steps.step4.title")}</h2>
                <h3 className={styles.work_steps_subtitle}>{t("work_steps.step4.subtitle")}</h3>
                <ul className={styles.work_steps_list}>
                  <li className={styles.work_steps_list_item}>{t("work_steps.step4.item1")}</li>
                  <li className={styles.work_steps_list_item}>{t("work_steps.step4.item2")}</li>
                  <li className={styles.work_steps_list_item}>
                    {t("work_steps.step4.item3")}
                    <br /> {t("work_steps.step4.item3_line1")}
                    <br /> {t("work_steps.step4.item3_line2")}
                  </li>
                  <li className={styles.work_steps_list_item}>{t("work_steps.step4.item4")}</li>
                  <li className={styles.work_steps_list_item}>{t("work_steps.step4.item5")}</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}





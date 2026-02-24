"use client";

import "./globals.css";
import styles from './MainPage.module.css';
import { useEffect, useRef, useState } from "react";
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
import Link from "next/link";
import Modal from "./utils/Modal";


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

  const stepsVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.18,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  };

  // =================================== scroll to stages when logo click  ============================
  const logoScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("scrollUp") === "true") {
      localStorage.removeItem("scrollUp");
      setTimeout(() => {
        window.dispatchEvent(new Event("scrollUp"));
      }, 300);
    }
  }, []);

  useEffect(() => {
    const handleStagesScroll = () => {
      if (logoScrollRef.current) {
        const y = logoScrollRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    window.addEventListener("scrollUp", handleStagesScroll);
    return () => {
      window.removeEventListener("scrollUp", handleStagesScroll);
    };
  }, []);


  // ============================== auto scroll ==================================
  const workplacesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // On mount, check if we need to scroll to workplaces
    if (typeof window !== "undefined" && localStorage.getItem("scrollToWorkplaces") === "true") {
      localStorage.removeItem("scrollToWorkplaces");
      setTimeout(() => {
        window.dispatchEvent(new Event("scrollToWorkplaces"));
      }, 300); // Delay to ensure page is rendered
    }
  }, []);
  useEffect(() => {
    const handleWorkplacesScroll = () => {
      if (workplacesRef.current) {
        const y = workplacesRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    window.addEventListener("scrollToWorkplaces", handleWorkplacesScroll);
    return () => {
      window.removeEventListener("scrollToWorkplaces", handleWorkplacesScroll);
    };
  }, []);

  // -------------------------------------------------------------------------------------
  const stagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("scrollToStages") === "true") {
      localStorage.removeItem("scrollToStages");
      setTimeout(() => {
        window.dispatchEvent(new Event("scrollToStages"));
      }, 300);
    }
  }, []);

  useEffect(() => {
    const handleStagesScroll = () => {
      if (stagesRef.current) {
        const y = stagesRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    window.addEventListener("scrollToStages", handleStagesScroll);
    return () => {
      window.removeEventListener("scrollToStages", handleStagesScroll);
    };
  }, []);


  // ==================================================================================

  // ===============================  modal operations  ================================1


  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<{ image: string; header: string; text: string }>({ image: "", header: "", text: "" });




  const handleImageClick = (image: string, header: string, text: string) => {
    setModalContent({ image, header, text });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };






  // ==================================================================================

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {/*=========== background image container ========= */}
        <div className={styles.background_image_container} ref={logoScrollRef}>
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

            <Link href="/contact">
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
            </Link>
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

          <div className={styles.experiance_header_container} ref={workplacesRef}  >
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
                <img
                  src={fire_alarm_image.src}
                  alt="Fire alarm image"
                  className={styles.experiance_image}
                  onClick={() => handleImageClick(fire_alarm_image.src, 'Fire Alarm Services',
                    `Our fire alarm services ensure the safety of your workplace with 
                    state-of-the-art systems and expert maintenance. We provide
                     comprehensive solutions to protect your employees and assets 
                     from fire hazards, giving you peace of mind.`)}
                />
              </div>
              <p className={styles.image_text}>Fire alarm</p>
              <div className={styles.image_thick_line}></div>
            </motion.div>

            {/* 2 image */}
            <motion.div className={styles.each_image_cont} variants={cardVariants} custom={1}>
              <div className={styles.image_wrapper}>
                <img
                  src={electrical_image.src}
                  alt="Electrical image"
                  className={styles.experiance_image}
                  onClick={() => handleImageClick(electrical_image.src, 'Electrical Services',
                    `Our electrical services ensure the safety and efficiency of your
                     workplace with state-of-the-art systems and expert maintenance.
                      We provide comprehensive solutions to protect your employees
                       and assets from electrical hazards, giving you peace of mind.` )}
                />
              </div>
              <p className={styles.image_text}>Electrical</p>
              <div className={styles.image_thick_line}></div>
            </motion.div>

            {/* 3 image */}
            <motion.div className={styles.each_image_cont} variants={cardVariants} custom={2}>
              <div className={styles.image_wrapper}>
                <img
                  src={hvac_image.src}
                  alt="Hvac image"
                  className={styles.experiance_image}
                  onClick={() => handleImageClick(hvac_image.src, 'HVAC Services',
                    `Our HVAC services ensure the comfort and efficiency of your
                     workplace with state-of-the-art systems and expert maintenance.
                      We provide comprehensive solutions to maintain optimal indoor
                       climate, giving you peace of mind.` )}
                />
              </div>
              <p className={styles.image_text}>Hvac</p>
              <div className={styles.image_thick_line}></div>
            </motion.div>

            {/* 4 image */}
            <motion.div className={styles.each_image_cont} variants={cardVariants} custom={3}>
              <div className={styles.image_wrapper}>
                <img
                  src={designe_image.src}
                  alt="Design image"
                  className={styles.experiance_image}
                  onClick={() => handleImageClick(designe_image.src, 'Design Services',
                    `Our design services ensure the aesthetic and functional quality of
                    your workplace with state-of-the-art systems and expert maintenance.
                     We provide comprehensive solutions to create an optimal environment,
                      giving you peace of mind.`)}
                />
              </div>
              <p className={styles.image_text}>Design</p>
              <div className={styles.image_thick_line}></div>
            </motion.div>

            {/* 5 image */}
            <motion.div className={styles.each_image_cont} variants={cardVariants} custom={4}>
              <div className={styles.image_wrapper}>
                <img
                  src={supervision_image.src}
                  alt="Supervision image"
                  className={styles.experiance_image}
                  onClick={() => handleImageClick(supervision_image.src, 'Supervision Services',
                    `Our supervision services ensure the quality and safety of your workplace with
                     state-of-the-art systems and expert maintenance. We provide comprehensive solutions
                      to monitor and manage your operations, giving you peace of mind.`)}
                />
              </div>
              <p className={styles.image_text}>Supervision</p>
              <div className={styles.image_thick_line}></div>
            </motion.div>

            {/* 6 image */}
            <motion.div className={styles.each_image_cont} variants={cardVariants} custom={5}>
              <div className={styles.image_wrapper}>
                <img
                  src={audit_image.src}
                  alt="Audit image"
                  className={styles.experiance_image}
                  onClick={() => handleImageClick(audit_image.src, 'Audit Services',
                    `Our audit services ensure the compliance and efficiency of your
                     workplace with state-of-the-art systems and expert maintenance.
                      We provide comprehensive solutions to assess and improve your
                       operations, giving you peace of mind.` )}
                />
              </div>
              <p className={styles.image_text}>Audit</p>
              <div className={styles.image_thick_line}></div>
            </motion.div>
          </motion.div>



          <motion.div
            className={styles.work_steps_container}
            ref={stagesRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h1
              className={styles.work_steps_header}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {t("work_steps.header")}
            </motion.h1>

            <div className={styles.work_steps_child_cont}>
              {[1, 2, 3, 4].map((step, i) => (
                <motion.div
                  key={step}
                  className={styles.work_steps}
                  variants={stepsVariants}
                  custom={i}
                >
                  <motion.h2
                    className={styles.work_steps_title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.18 + 0.2, duration: 0.5, ease: "easeOut" }}
                  >
                    {t(`work_steps.step${step}.title`)}
                  </motion.h2>

                  <motion.h3
                    className={styles.work_steps_subtitle}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.18 + 0.3, duration: 0.5, ease: "easeOut" }}
                  >
                    {t(`work_steps.step${step}.subtitle`)}
                  </motion.h3>

                  <motion.ul
                    className={styles.work_steps_list}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.18 + 0.4, duration: 0.5, ease: "easeOut" }}
                  >
                    {step === 1 && (
                      <>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.45, duration: 0.4 }}>{t("work_steps.step1.item1")}</motion.li>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.55, duration: 0.4 }}>{t("work_steps.step1.item2")}</motion.li>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.65, duration: 0.4 }}>
                          {t("work_steps.step1.item3")}<br />{t("work_steps.step1.item3_line1")}<br />{t("work_steps.step1.item3_line2")}<br />{t("work_steps.step1.item3_line3")}
                        </motion.li>
                      </>
                    )}
                    {step === 2 && (
                      <>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.45, duration: 0.4 }}>{t("work_steps.step2.item1")}</motion.li>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.55, duration: 0.4 }}>{t("work_steps.step2.item2")}</motion.li>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.65, duration: 0.4 }}>
                          {t("work_steps.step2.item3")}<br />{t("work_steps.step2.item3_line1")}<br />{t("work_steps.step2.item3_line2")}<br />{t("work_steps.step2.item3_line3")}<br />{t("work_steps.step2.item3_line4")}
                        </motion.li>
                      </>
                    )}
                    {step === 3 && (
                      <>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.45, duration: 0.4 }}>{t("work_steps.step3.item1")}</motion.li>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.55, duration: 0.4 }}>{t("work_steps.step3.item2")}</motion.li>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.65, duration: 0.4 }}>{t("work_steps.step3.item3")}</motion.li>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.75, duration: 0.4 }}>{t("work_steps.step3.item4")}</motion.li>
                      </>
                    )}
                    {step === 4 && (
                      <>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.45, duration: 0.4 }}>{t("work_steps.step4.item1")}</motion.li>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.55, duration: 0.4 }}>{t("work_steps.step4.item2")}</motion.li>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.65, duration: 0.4 }}>
                          {t("work_steps.step4.item3")}<br />{t("work_steps.step4.item3_line1")}<br />{t("work_steps.step4.item3_line2")}
                        </motion.li>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.75, duration: 0.4 }}>{t("work_steps.step4.item4")}</motion.li>
                        <motion.li className={styles.work_steps_list_item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.85, duration: 0.4 }}>{t("work_steps.step4.item5")}</motion.li>
                      </>
                    )}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
        {/* Modal */}
        {isModalOpen && (
          <Modal image={modalContent.image} header={modalContent.header} text={modalContent.text} onClose={closeModal} />
        )}
      </main>
    </div>
  );
}





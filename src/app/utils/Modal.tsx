import { motion } from "framer-motion";
import styles from "./Modal.module.css";

interface ModalProps {
  image: string;
  header: string;
  text: string;
  onClose: () => void;
}

export default function Modal({ image, header, text, onClose }: ModalProps) {
  const descriptionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeInOut" as any } 
    },
    exit: { 
      opacity: 0, 
      x: -50, 
      transition: { duration: 0.4, ease: "easeInOut" as any } 
    },
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_child_content}>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          <div>
            <img src={image} alt="Modal content" className={styles.modalImage} />
          </div>
          <motion.div
            className={styles.modal_descriptions}
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h1 className={styles.modalHeader}>{header}</h1>
            <p className={styles.modalText}>{text}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
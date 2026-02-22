
import styles from './Contact.module.css';
import contact_img from '../assets/contact.jpg'

export default function ContactClient() {



  return (
    <div className={styles.contact_container} >
      <div className={styles.contact_inside_cont} >

        <div className={styles.image_cont} >
          <img src={contact_img.src} alt="contact" className={styles.contact_image} />
        </div>


        <div className={styles.contact_form} >
          <h2 className={styles.contact_title}>Contact Us</h2>
          <form className={styles.form} >
            <input type="text" placeholder="Your Name" className={styles.input} />
            <input type="email" placeholder="Your Email" className={styles.input} />
            <textarea placeholder="Your Message" className={styles.textarea} />
            <button type="submit" className={styles.submit_button}>Send Message</button>
          </form>
        </div>

      </div>
    </div>


  )
}


















"use client";


import styles from './Contact.module.css';
import contact_img from '../assets/contact.jpg'
import { useState } from 'react';


interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}


export default function ContactClient() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contact_container} >
      <div className={styles.contact_inside_cont} >

        <div className={styles.image_cont} >
          <img src={contact_img.src} alt="contact" className={styles.contact_image} />
        </div>


        <div className={styles.contact_form} >
          <h2 className={styles.contact_title}>Contact Us</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.name_fields} >
              <input 
                type="text" 
                name="firstName"
                placeholder="Your Name" 
                className={styles.input}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input 
                type="text" 
                name="lastName"
                placeholder="Your Second Name" 
                className={styles.input}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.email_fields}>
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                className={styles.input}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <textarea 
              name="message"
              placeholder="Leave us a message..." 
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button 
              type="submit" 
              className={styles.submit_button}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            {submitStatus === 'success' && <p style={{ color: 'green' }}>Message sent successfully!</p>}
            {submitStatus === 'error' && <p style={{ color: 'red' }}>Failed to send message. Please try again.</p>}
          </form>
        </div>

      </div>
    </div>


  )
}


















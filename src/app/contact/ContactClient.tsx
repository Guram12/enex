"use client";

import styles from './Contact.module.css';
import contact_img from '../assets/contact.jpg'
import { useState } from 'react';
import { motion } from 'framer-motion';

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
    <motion.div
      className={styles.contact_container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={styles.contact_inside_cont}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >

        {/* Image */}
        <motion.div
          className={styles.image_cont}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img src={contact_img.src} alt="contact" className={styles.contact_image} />
        </motion.div>

        {/* Form */}
        <motion.div
          className={styles.contact_form}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.h2
            className={styles.contact_title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Contact Us
          </motion.h2>

          <form className={styles.form} onSubmit={handleSubmit}>

            {/* Name fields */}
            <motion.div
              className={styles.name_fields}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                type="text"
                name="firstName"
                placeholder="Your Name"
                className={styles.input}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                type="text"
                name="lastName"
                placeholder="Your Second Name"
                className={styles.input}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </motion.div>

            {/* Email fields */}
            <motion.div
              className={styles.email_fields}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                type="email"
                name="email"
                placeholder="Your Email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                type="text"
                name="subject"
                placeholder="Subject"
                className={styles.input}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </motion.div>

            {/* Textarea */}
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              // @ts-ignore
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
              name="message"
              placeholder="Leave us a message..."
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
              required
            />

            {/* Submit button */}
            <motion.button
              type="submit"
              className={styles.submit_button}
              disabled={isSubmitting}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </motion.button>

            {/* Status messages */}
            {submitStatus === 'success' && (
              <motion.p
                style={{ color: 'green' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                Message sent successfully!
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p
                style={{ color: 'red' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                Failed to send message. Please try again.
              </motion.p>
            )}

          </form>
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
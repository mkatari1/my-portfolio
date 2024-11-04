'use client';
import { useState } from 'react';
import Layout from '/components/Layout';
import styles from '/styles/Contact.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    // You can integrate with an API or a service like Formspree, EmailJS, etc.
    console.log(formData);
    // For demonstration, we'll just show a success message
    setSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>
      {submitted ? (
        <p className={styles.success}>Thank you for your message! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      )}
      <div className={styles.additionalInfo}>
        <p>You can also reach me directly at <a href="mailto:mkatari1@asu.edu">mkatari1@asu.edu</a> or call me at <a href="tel:+16232681125">623-268-1125</a>.</p>
      </div>
    </section>
  );
}
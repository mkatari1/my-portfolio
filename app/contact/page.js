'use client';
import { useState } from 'react';
import Layout from '/components/Layout';
import styles from '/styles/Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For demonstration, we'll just log the data and show a success message.
        console.log(formData);
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
            </section>
    );
}
// app/about/page.js
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <p>
        [Write a brief introduction about yourself. Include your background, skills, and what drives you professionally.]
      </p>
    </section>
  );
}
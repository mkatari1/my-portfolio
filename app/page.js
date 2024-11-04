// app/page.js
import Image from 'next/image';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <h1>Welcome to My Portfolio</h1>
      <p>I am a [Your Profession], passionate about [Your Passion].</p>
      <Image src="/images/profile.jpg" alt="Profile Picture" width={200} height={200} />
    </section>
  );
}
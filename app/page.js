// app/page.js
import Image from 'next/image';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <h1>Mihir Kataria</h1>
      <p>Computer Science Student at Arizona State University</p>
      <Image src="/images/profile.jpg" alt="Profile Picture" width={450} height={450} />
    </section>
  );
}


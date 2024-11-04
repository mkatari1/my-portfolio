// components/Footer.js
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Mihir Kataria. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
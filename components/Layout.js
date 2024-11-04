// components/Layout.js
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '/styles/Layout.module.css';

const Layout = ({ children, title = 'My Portfolio' }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="My personal portfolio website built with Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
// app/layout.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'My personal portfolio website built with Next.js App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
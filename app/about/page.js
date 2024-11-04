// app/about/page.js
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      
      <div className={styles.section}>
        <h3>Education</h3>
        <p>
          <strong>Bachelor of Science in Computer Science</strong><br />
          Arizona State University, Tempe, AZ<br />
          Expected May 2025<br />
          GPA: 4.00
        </p>
      </div>
      
      <div className={styles.section}>
        <h3>Technical Skills</h3>
        <ul>
          <li><strong>Programming Languages:</strong> Python, Java, JavaScript, Swift, C/C++</li>
          <li><strong>Web Development:</strong> HTML, CSS, React.JS</li>
          <li><strong>Software:</strong> Outlook, Microsoft Office 365, Adobe Creative Cloud</li>
          <li><strong>Tools, Databases, and OS:</strong> Node.JS, Express.JS, PostgreSQL, Git, GitHub, Windows, MacOS, Linux/Unix</li>
        </ul>
      </div>
      
      <div className={styles.section}>
        <h3>Extracurricular Experience</h3>
        <ul>
          <li><strong>Covid-19 Relief Efforts, Non-Government Organization:</strong> Actively participated as a Covid-19 warrior, distributing food, masks, and hand sanitizers to communities in need during the pandemic.</li>
          <li><strong>Saksharta Mission Project, Government of India:</strong> Contributed to the "Education for All" initiative by making an illiterate person literate, under a project promoted by Bal Bharati Public School, Delhi.</li>
          <li><strong>Volunteer Work, Rotary Club and Lions Charitable Trust Bhiwadi City:</strong> Actively participated in various community service activities including blood donation camps, tree plantation drives, and hygiene awareness campaigns.</li>
          <li><strong>Advanced Guitar Training and Performance:</strong> Earned a 4-year senior diploma degree in Hindustani classical guitar from Prayag Sangeet Samiti, a prestigious Indian music institution. Furthered skills with 2 additional years at Anand Milind Academy in Mumbai, under renowned music directors. Actively performed at various events, including school functions and major events like Powai Fest in Mumbai, India.</li>
        </ul>
      </div>
    </section>
  );
}
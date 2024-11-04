// app/projects/page.js
import ProjectCard from '../../components/ProjectCard';
import styles from '/styles/Projects.module.css';

const projects = [
  {
    title: 'Internship at ProArch',
    description: 'Worked on AI, LLM evaluation frameworks, and improving a custom Copilot for HT use case. Gained expertise in prompt engineering, MLflow integration, and test automation with Selenium.',
    
  },
  {
    title: 'Data Science Salary Analysis Project',
    description: 'Analyzed a dataset from Kaggle on data science salaries using R to explore factors affecting salary trends. Utilized relevant libraries for effective data manipulation and visualization.',
    
  },
  {
    title: 'Compiler Construction Project',
    description: 'Developed a C++ compiler for a simple language, transforming programs into a linked list of instructions instead of assembly code. Parsed input programs and executed them interpretatively.',
    
  },
  {
    title: 'JobFinder Application',
    description: 'Developed a professional networking iOS application in Swift, featuring real-time data updates with Firebase and job data access through integrated APIs. Implemented the MVVM Architecture.',
    
  },
  {
    title: 'Chat Application',
    description: 'Developed a robust web chat application using Java and socket programming. Implemented functionalities such as account management and chat rooms with PostgreSQL database integration.',
    
  },
  {
    title: 'Multigenerational Housing Community Project',
    description: 'Collaborated to design a community with thirteen housing units in Phoenix, focusing on inexpensive, eco-friendly, and modern solutions. Developed a virtual model and 3D printed replica for visualization.',
    
  },
];

export default function ProjectsPage() {
  return (
    <section className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}
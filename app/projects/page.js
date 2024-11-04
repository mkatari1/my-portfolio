// pages/projects.js
import Layout from '@/components/Layout';
import styles from '/styles/Projects.module.css'
import ProjectCard from '@/components/ProjectCard';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of Project One.',
        image: '/images/project1.png',
        link: 'https://github.com/yourusername/project-one',
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        image: '/images/project2.png',
        link: 'https://github.com/yourusername/project-two',
    },
    // Add more projects as needed
];

export default function Projects() {
    return (
            <section className={styles.projects}>
                <h2>My Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </section>
    );
}
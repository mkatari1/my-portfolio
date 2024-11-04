// components/ProjectCard.js
'use client';

import Image from 'next/image';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} width={300} height={200} className={styles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
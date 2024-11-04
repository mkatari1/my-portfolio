// components/ProjectCard.js
'use client';

import Image from 'next/image';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description}) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
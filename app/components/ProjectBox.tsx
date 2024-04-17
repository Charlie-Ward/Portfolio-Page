import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './ProjectBox.module.css';

interface ProjectBoxProps {
  imageSrc?: string;
  title: string;
  language: string;
  description: string;
  githubLink: string;
  externalLink?: string;
  secondLink?: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  imageSrc,
  title,
  language,
  description,
  githubLink,
  externalLink,
  secondLink
}) => {
  return (
    <div className={`${styles.projectBox} ${styles.slideIn}`}>
      {imageSrc && (
        <img src={imageSrc} alt={title} className={styles.projectImage} />
      )}
      <div className={styles.projectContent}>
        <h2 className={styles.projectTitle}>{title}</h2>
        <p className={styles.projectLanguage}>{language}</p>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.projectLinks}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <div className={styles.iconContainer}>
              <FaGithub className={styles.icon} />
            </div>
          </a>
          {externalLink && (
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <div className={styles.iconContainer}>
                <FaExternalLinkAlt className={styles.icon} />
              </div>
            </a>
          )}
          {secondLink && (
            <a href={secondLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <div className={styles.iconContainer}>
                <FaExternalLinkAlt className={styles.icon} />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;

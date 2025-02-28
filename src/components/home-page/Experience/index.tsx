import styles from "./style.module.scss";

import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div id={"Experience"} className={styles.container}>
      <div className={styles.container_bg_primaryHeader}></div>
      <div className={styles.container_bg_primaryContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.titleSection}>
          <div className={styles.titleSection_container}>
            <header className={styles.titleSection_container_title}>
              Experience
            </header>
            <div className={styles.titleSection_container_subtitle}>
              Working and keep learning.
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <div className={styles.infoSection_container_timeLine}>
              <ExperienceCard
                period='2021 - present'
                title='Junyi Academy'
                website='https://www.junyiacademy.org/'
                position={"Software Development & Project Specialist Intern"}
                location='Taipei, ROC'
                info={
                  "• Front-end development of Junyi Academy platform using React.js, Material UI, Redux Toolkit, Observable, APIs integration techniques both JavaScript & TypeScript.\n• Building and Creating custom component libraries with Storybook.\n• Unit test for the web application in multiple browsers & devices.\n• Code refactoring to convert React class component to functional component with hooks & converting JavaScript to TypeScript.\n• Regular web application maintenance, Third-party library updates, bug fixes and so on.\n• Collaborate with Front-end partner, Back-end team members, Project Owner & Project Designer."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

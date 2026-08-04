import styles from "./style.module.scss";

import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
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
                period='Jun 2021 - Jun 2022'
                title='Junyi Academy'
                website='https://www.junyiacademy.org/'
                position={"Software Development & Project Specialist Intern"}
                location='Taipei, Taiwan (R.O.C.)'
                info={
                  "• Worked on the front end of the Junyi Academy learning platform, mainly in React and TypeScript with Material UI and Redux Toolkit, wired up to the backend APIs.\n• Set up the Next.js foundation that new products and projects were built on.\n• Built JUI, our in-house component library on top of Material UI, and documented it in Storybook so the product and product design teams could browse what was available.\n• Moved old class components to function components with hooks, and converted JavaScript files to TypeScript.\n• Wrote unit tests for components and end-to-end tests in Cypress, and checked the app behaved the same across browsers and devices.\n• Handled the routine upkeep: dependency upgrades, bug fixes, general maintenance.\n• Worked day to day with the other front-end developer and the back-end engineers in the software team, and with the product team and the product design team."
                }
                techStack='Next.js · React · TypeScript · JavaScript · Material UI · Redux Toolkit · React Query · Storybook · React Testing Library · Cypress · GCP · App Engine'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

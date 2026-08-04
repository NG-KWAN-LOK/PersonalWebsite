import styles from "./style.module.scss";

import { SkillCard } from "./SkillCard";

export const Skill = () => {
  return (
    <div id={"Skill"} className={styles.container}>
      <div className={styles.container_bg_primaryHeader}></div>
      <div className={styles.container_bg_primaryContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.titleSection}>
          <div className={styles.titleSection_container}>
            <header className={styles.titleSection_container_title}>
              SKILLS
            </header>
            <div className={styles.titleSection_container_subtitle}>
              Not only but above all.
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <SkillCard persentage={80} title={"Next.js"} />
            <SkillCard persentage={80} title={"React"} />
            <SkillCard persentage={80} title={"Typescript/ Javascript"} />
            <SkillCard persentage={80} title={"Storybook"} />
            <SkillCard
              persentage={80}
              title={"Vitest/ React Testing Library"}
            />
            <SkillCard persentage={60} title={"Cypress"} />
            <SkillCard persentage={60} title={"SQL/ PostgreSQL/ BigQuery"} />
            <SkillCard persentage={60} title={"Python/ FastAPI"} />
          </div>
        </div>
      </div>
    </div>
  );
};

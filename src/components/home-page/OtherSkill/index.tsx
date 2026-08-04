import styles from "./style.module.scss";

import { OtherSkillCard } from "./OtherSkillCard";

export const OtherSkill = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_bg_secondHeader}></div>
      <div className={styles.container_bg_secondContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.titleSection}>
          <div className={styles.titleSection_container}>
            <header className={styles.titleSection_container_title}>
              OTHER SKILLS
            </header>
            <div className={styles.titleSection_container_subtitle}>
              Last but not least.
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <OtherSkillCard
              title={"Claude Code / Codex / Cursor"}
              subtitle={
                "I build my own skills and agents on top of them, for writing code, monitoring our systems and doing code review."
              }
            />
            <OtherSkillCard
              title={"Google Cloud Platform"}
              subtitle={
                "Deploys on App Engine and Cloud Run, scheduled jobs on Cloud Scheduler, and Cloud Logging when something breaks."
              }
            />
            <OtherSkillCard
              title={"Google Analytics / Tag Manager"}
              subtitle={
                "Tagging events on the front end and reading them back in BigQuery, so we know how people actually use the product."
              }
            />
            <OtherSkillCard title={"Git"} subtitle={"I am a team worker."} />
            <OtherSkillCard
              title={"Unity"}
              subtitle={"I used this to finish my cool final year project!"}
            />
            <OtherSkillCard
              title={"Adobe Photoshop"}
              subtitle={"Learnt it just for fun!"}
            />
            <OtherSkillCard
              title={"Adobe Premiere"}
              subtitle={"I was a former Campus TV's cutter."}
            />
            <OtherSkillCard
              title={"Adobe Illustrator"}
              subtitle={"Thanks to make my photo change pretty."}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

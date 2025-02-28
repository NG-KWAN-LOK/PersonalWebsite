import styles from "./style.module.scss";

import OtherSkillCard from "./OtherSkillCard";

const OtherSkill = () => {
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
            <OtherSkillCard title={"Git"} subtitle={"I am a team worker."} />
            <OtherSkillCard
              title={"Microsoft Office"}
              subtitle={"Finish homework and presentation just use it."}
            />
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

export default OtherSkill;

import styles from "./style.module.scss";

export const Intro = () => {
  return (
    <div id={"Intro"} className={styles.container}>
      <div className={styles.container_bg_secondHeader}></div>
      <div className={styles.container_bg_secondContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.titleSection}>
          <div className={styles.titleSection_container}>
            <header className={styles.titleSection_container_title}>
              INTRO
            </header>
            <div className={styles.titleSection_container_subtitle}>
              What I am all about.
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <p>
              I grew up in Hong Kong and now live in Taipei. Software runs
              through most of daily life, and at some point I wanted to build
              some of it myself. That is how I ended up in front-end.
            </p>
            <p>
              Maths and logic have always been my stronger side, and I like the
              moment a problem finally works out. Right now I spend most of my
              time on React and TypeScript.
            </p>
            <p>
              Away from code, I was President of the Student Council in
              secondary school and volunteered at an elderly home in Taiwan.
              Both taught me to listen before I speak, which turns out to matter
              in a team as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

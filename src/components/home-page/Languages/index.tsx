import styles from "./style.module.scss";

import LanguagesCard from "./LanguagesCard";

const Languages = () => {
  return (
    <div id={"Languages"} className={styles.container}>
      <div className={styles.container_bg_secondHeader}></div>
      <div className={styles.container_bg_secondContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.titleSection}>
          <div className={styles.titleSection_container}>
            <header className={styles.titleSection_container_title}>
              LANGUAGES
            </header>
            <div className={styles.titleSection_container_subtitle}>
              A way to be an international?
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <LanguagesCard title={"Cantonese"} subtitle={"Mother tongue"} />
            <LanguagesCard title={"Mandarin"} subtitle={"Fluent spoken"} />
            <LanguagesCard
              title={"English "}
              subtitle={"Fluent spoken and written"}
            />
            <LanguagesCard
              title={"Japanese"}
              subtitle={"Good spoken and written\n日本語能力試験 JLPT N2"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;

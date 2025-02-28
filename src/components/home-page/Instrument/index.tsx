import styles from "./style.module.scss";

import InstrumentCard from "./InstrumentCard";

const Instrument = () => {
  return (
    <div id={"Instrument"} className={styles.container}>
      <div className={styles.container_bg_primaryHeader}></div>
      <div className={styles.container_bg_primaryContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.titleSection}>
          <div className={styles.titleSection_container}>
            <header className={styles.titleSection_container_title}>
              INSTRUMENT
            </header>
            <div className={styles.titleSection_container_subtitle}>
              Work-life balance.
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <InstrumentCard
              title={"Scotland Bagpipes"}
              subtitle={
                "Former Scotland Bagpipes Player at Scout Association Of Hong Kong"
              }
            />
            <InstrumentCard
              title={"Recorder"}
              subtitle={"Not a Noob but not Pro"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instrument;

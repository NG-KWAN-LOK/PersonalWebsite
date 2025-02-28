import styles from "./style.module.scss";

import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div id='Contact' className={styles.container}>
      <div className={styles.container_bg_primaryHeader}></div>
      <div className={styles.container_bg_primaryContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.titleSection}>
          <div className={styles.titleSection_container}>
            <header className={styles.titleSection_container_title}>
              CONTACT
            </header>
            <div className={styles.titleSection_container_subtitle}>
              Call me may be.
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <ContactCard title='Location' text='Taipei, ROC' />
            <ContactCard
              title='LinkedIn'
              text='Kwan Lok NG'
              url='https://www.linkedin.com/in/kwan-lok-ng-0ab026208/'
            />
            <ContactCard
              title='Github'
              text='https://github.com/NG-KWAN-LOK/'
              url='https://github.com/NG-KWAN-LOK/'
            />
          </div>
          <hr className={styles.infoSection_line} />
          <div className={styles.infoSection_footer}>
            <div className={styles.infoSection_footer_EngName}>Sam</div>
            <div className={styles.infoSection_footer_ChiName}>
              <span>KWAN LOK, NG 吳軍樂</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

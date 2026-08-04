import React from "react";
import styles from "./style.module.scss";
interface ContactCardProps {
  title: string;
  text: string;
  url?: string;
}
const ContactCard: React.FC<ContactCardProps> = ({
  title,
  text,
  url = null,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p className={styles.item_title}>{title}</p>
        {url ? (
          <a className={styles.item_text_url} href={url} target={"_blank"}>
            {text}
          </a>
        ) : (
          <p className={styles.item_text}>{text}</p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;

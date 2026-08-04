import styles from "./style.module.scss";
export const ContactCard = ({
  title,
  text,
  url,
}: {
  title: string;
  text: string;
  url?: string;
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

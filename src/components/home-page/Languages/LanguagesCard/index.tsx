import styles from "./style.module.scss";

export const LanguagesCard = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_item_title}>
        <p className={styles.container_item_title_text}>{title}</p>
        <p className={styles.container_item_title_subtext}>
          {subtitle.split("\n").map((i, index) => {
            return <p key={index}>{i}</p>;
          })}
        </p>
      </div>
    </div>
  );
};

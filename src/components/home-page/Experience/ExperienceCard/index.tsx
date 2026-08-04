import styles from "./style.module.scss";

interface ExperienceCardProps {
  period: string;
  title: string;
  website: string;
  position: string;
  location: string;
  info: string;
  techStack?: string;
}
export const ExperienceCard = ({
  period,
  title,
  website,
  position,
  location,
  info,
  techStack,
}: ExperienceCardProps) => {
  return (
    <div id={"Experience"} className={styles.container}>
      <div className={styles.container_point}></div>
      <div className={styles.container_item_title}>
        <p className={styles.container_item_title_period}>{period}</p>
        <a
          className={styles.container_item_title_title}
          href={website}
          target="_blank"
        >
          {title}
        </a>
        <p className={styles.container_item_title_position}>{position}</p>
        <p className={styles.container_item_title_location}>{location}</p>
      </div>
      <div className={styles.container_info}>
        {techStack && (
          <div className={styles.container_info_techStack}>
            <p className={styles.container_info_techStack_label}>Tech stack</p>
            <p>{techStack}</p>
          </div>
        )}
        <p className={styles.container_info_text}>
          {info.split("\n").map((i, index) => {
            return <p key={index}>{i}</p>;
          })}
        </p>
      </div>
    </div>
  );
};

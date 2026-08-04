import styles from "./style.module.scss";
export const ProgressBar = ({ persentage }: { persentage: number }) => {
  const fillerStyles = {
    width: `${persentage}%`,
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.container_progressBar_view}
        style={fillerStyles}
      ></div>
    </div>
  );
};

import styles from "./style.module.scss";
import MinionsLove from "../../../image/2025-anniversary/minions-love.png";
import BorderImage from "../../../image/2025-anniversary/small-heart.webp";

export const OtherPage = () => {
  document.title = "2025 Anniversary";
  return (
    <div style={{ backgroundColor: "#faf3dd", overflow: "hidden" }}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content_minions}>
            <img
              className={styles.content_minions_img}
              src={MinionsLove}
              alt='minions-love'
            />
          </div>
          <div className={styles.content_container}>
            <h1 className={styles.content_container_title}>
              Happy Anniversary
            </h1>
            <div className={styles.content_container_border}>
              <img
                className={styles.content_container_border_image}
                src={BorderImage}
                alt='border-image'
              />
            </div>
            <div
              className={styles.content_container_text}
              style={{ marginTop: "0px" }}
            >
              祝小朋友同大朋友兩週年快樂！
            </div>
            <div className={styles.content_container_text}>
              因為有你既出現，令我既生活變得更加精彩！
              <br />
              希望我地可以一直咁開開心心，快快樂樂咁生活！
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState, MouseEvent } from "react";
import styles from "./style.module.scss";

const LAST_LINE = 2;
const LINE_START_ZONE_RATIO = 0.35;
type Caret = { line: number; pos: "start" | "end" };
export const CodeIntro = () => {
  const [caret, setCaret] = useState<Caret>({
    line: LAST_LINE,
    pos: "end",
  });
  const lineClassName = (line: number) => {
    if (line !== caret.line) {
      return styles.container_body_line;
    }
    const activeClassName =
      caret.pos === "start"
        ? styles.container_body_line_activeStart
        : styles.container_body_line_activeEnd;
    return `${styles.container_body_line} ${activeClassName}`;
  };
  const handleLineClick =
    (line: number) => (event: MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const pos =
        event.clientX - rect.left <= rect.width * LINE_START_ZONE_RATIO
          ? "start"
          : "end";
      setCaret({ line, pos });
    };
  return (
    <div className={styles.container}>
      <div className={styles.container_bar}>
        <span className={styles.container_bar_dot}></span>
        <span className={styles.container_bar_dot}></span>
        <span className={styles.container_bar_dot}></span>
        <span className={styles.container_bar_filename}>whoami.ts</span>
      </div>
      <div className={styles.container_body}>
        <div className={lineClassName(0)} onClick={handleLineClick(0)}>
          <span className={styles.container_body_firstChar}>S</span>
          pider-Man, Iron Man, Hip-hop Man.{" "}
          <span className={styles.container_body_mobileBlock}>
            I am{" "}
            <span className={styles.container_body_highlight}>
              Front-end Man
            </span>
            .<span className={styles.container_body_caret}></span>
          </span>
        </div>
        <div className={lineClassName(1)} onClick={handleLineClick(1)}>
          <span className={styles.container_body_firstChar}>N</span>o mask, No
          Falcon tan.
          <span className={styles.container_body_caret}></span>
        </div>
        <div className={lineClassName(2)} onClick={handleLineClick(2)}>
          <span className={styles.container_body_firstChar}>A</span> simple{" "}
          <span className={styles.container_body_code}>Hello</span>!{" "}
          <span className={styles.container_body_code}>World</span> built line by
          line.
          <span className={styles.container_body_caret}></span>
        </div>
      </div>
    </div>
  );
};

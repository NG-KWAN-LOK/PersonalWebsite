import { useState, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import styles from "./style.module.scss";

import { ProgressBar } from "./ProgressBar";
export const SkillCard = ({
  persentage,
  title,
}: {
  persentage: number;
  title: string;
}) => {
  const [completed, setCompleted] = useState(0);
  const intersectionRef = useRef<HTMLDivElement>(null!);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0) {
      setCompleted(persentage);
    }
  }, [intersection]);
  return (
    <div ref={intersectionRef} className={styles.container}>
      <div className={styles.container_item_title}>
        <span className={styles.container_item_title_persentage}>
          {persentage}
        </span>
        <small>%</small>
        <span className={styles.container_item_title_text}>{title}</span>
      </div>
      <ProgressBar persentage={completed} />
    </div>
  );
};

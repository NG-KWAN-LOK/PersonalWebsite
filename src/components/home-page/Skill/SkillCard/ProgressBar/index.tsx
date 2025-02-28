import React, { useState, useCallback } from "react";
import styles from "./style.module.scss";
interface ProgressBarProps {
  persentage: number;
}
const SkillCard: React.FC<ProgressBarProps> = ({ persentage }) => {
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

export default SkillCard;

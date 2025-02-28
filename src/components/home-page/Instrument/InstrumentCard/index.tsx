import React, { useState, useEffect } from "react";
import { useIntersection } from "react-use";
import styles from "./style.module.scss";

interface SkillCardProps {
  title: string;
  subtitle: string;
}
const SkillCard: React.FC<SkillCardProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_item_title}>
        <p className={styles.container_item_title_text}>{title}</p>
        <p className={styles.container_item_title_subtext}>{subtitle}</p>
      </div>
    </div>
  );
};

export default SkillCard;

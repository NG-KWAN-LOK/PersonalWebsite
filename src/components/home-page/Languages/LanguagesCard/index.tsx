import React, { useState, useEffect } from "react";
import { useIntersection } from "react-use";
import styles from "./style.module.scss";

interface LanguagesCardProps {
  title: string;
  subtitle: string;
}
const LanguagesCard: React.FC<LanguagesCardProps> = ({ title, subtitle }) => {
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

export default LanguagesCard;

import React, { useState, useEffect } from "react";
import { useIntersection } from "react-use";
import styles from "./style.module.scss";

interface PortfolioCardProps {
  imageUrl: string;
  websiteUrl: string;
  githubUrl: string;
  title: string;
  subtitle: string;
}
const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imageUrl,
  websiteUrl,
  githubUrl,
  title,
  subtitle,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_item_container}>
        <img className={styles.container_item_container_img} src={imageUrl} />
        <div className={styles.container_item_container_cover}>
          <div className={styles.container_item_container_cover_top}>
            <div className={styles.container_item_container_cover_top_title}>
              {title}
            </div>
            <div className={styles.container_item_container_cover_top_subtitle}>
              {subtitle.split("\n").map((i, index) => {
                return <p key={index}>{i}</p>;
              })}
            </div>
          </div>
          <div className={styles.container_item_container_cover_botton}>
            <a
              className={styles.container_item_container_cover_botton_demoBtn}
              href={websiteUrl}
              target={"_blank"}
            >
              Demo
            </a>
            <a
              className={styles.container_item_container_cover_botton_GithubBtn}
              href={githubUrl}
              target={"_blank"}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

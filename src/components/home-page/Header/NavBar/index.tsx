import React, { useState, useCallback, useEffect } from "react";
import styles from "./style.module.scss";
interface NavBarProps {
  setMobileNavOn: () => void;
  setMobileNavOff: () => void;
}
const NavBar: React.FC<NavBarProps> = ({ setMobileNavOn, setMobileNavOff }) => {
  //console.log(setMobileNavOn);
  return (
    <nav className={styles.navContainer}>
      <div
        className={`${styles["navBar"]} ${
          true ? styles["navBar-open"] : styles["navBar-close"]
        }`}
      >
        <div className={styles.navBar_menuNavLayer}>
          <h1 className={styles.navBar_siteTitle}></h1>
          <div className={styles.navBar_menuNav}>
            <div className={styles.navBar_menuNav_item}>
              <a
                className={styles.navBar_menuNav_item_title}
                href={"#Home"}
                onClick={setMobileNavOff}
              >
                Home
              </a>
              <a
                className={styles.navBar_menuNav_item_title}
                href={"#Intro"}
                onClick={setMobileNavOff}
              >
                Intro
              </a>
              <a
                className={styles.navBar_menuNav_item_title}
                href={"#Portfolio"}
                onClick={setMobileNavOff}
              >
                Protfolio
              </a>
              <a
                className={styles.navBar_menuNav_item_title}
                href={"#Contact"}
                onClick={setMobileNavOff}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className={styles.background} onClick={setMobileNavOff}></div>
      </div>
    </nav>
  );
};

export default NavBar;

import React, { useState, useCallback, useEffect, useRef } from "react";
import styles from "./style.module.scss";

import NavBar from "./NavBar";
const Header = () => {
  const displayNavTimeoutRef = useRef<any>();
  const [isNavBarDisplay, setIsNavBarDisplay] = useState(false);
  const [isHeaderDisplay, setIsHeaderDisplay] = useState(true);
  const navToggleOn = useCallback(() => {
    clearTimeout(displayNavTimeoutRef.current);
    setIsNavBarDisplay(true);
  }, []);
  const navToggleOff = useCallback(() => setIsNavBarDisplay(false), []);
  const headerToggleOn = useCallback(() => setIsHeaderDisplay(true), []);
  const headerToggleOff = useCallback(() => setIsHeaderDisplay(false), []);

  useEffect(() => {
    const onScroll = () => {
      headerToggleOn();
      clearTimeout(displayNavTimeoutRef.current);
      if (window.pageYOffset !== 0) {
        displayNavTimeoutRef.current = setTimeout(headerToggleOff, 3000);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        isHeaderDisplay
          ? styles.headerContainer_open
          : styles.headerContainer_close
      }
    >
      <div className={styles.header}>
        <a className={styles.header_siteTitle} href={"#Home"}>
          Home
        </a>
        <a className={styles.header_siteTitle} href={"#Intro"}>
          Intro
        </a>
        <a className={styles.header_siteTitle} href={"#Experience"}>
          Experience
        </a>
        <a className={styles.header_siteTitle} href={"#Portfolio"}>
          Portfolio
        </a>
        <a className={styles.header_siteTitle} href={"#Contact"}>
          Contact
        </a>
      </div>
      <div className={styles.phoneHerder}>
        <div className={styles.header_mainnavButtom} onClick={navToggleOn}>
          <button className={styles.header_mainnavButtom_icon}>
            <div className={styles.hamburger}></div>
          </button>
        </div>
      </div>
      {isNavBarDisplay && (
        <NavBar
          setMobileNavOn={() => navToggleOn()}
          setMobileNavOff={() => navToggleOff()}
        />
      )}
    </header>
  );
};

export default Header;

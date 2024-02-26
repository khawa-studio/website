"use client";

import { useEffect } from "react";

import styles from "./page.module.scss";

const HomePage = () => {
  useEffect(() => {
    console.log(styles);
  }, []);

  return <main className={styles.main}>Khawa Studio</main>;
};

export default HomePage;

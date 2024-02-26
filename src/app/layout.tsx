import { Metadata } from "next";

import "@/styles/global.scss";

import { Layout } from "@/types";

import Header from "./$components/Header";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Khawa Studio",
};

const RootLayout: Layout = (props) => {
  return (
    <html lang="tb">
      <body className={styles.body}>
        <Header />
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;

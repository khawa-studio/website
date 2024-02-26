import { Metadata } from "next";

import { Layout } from "@/types";

import "@/styles/global.scss";

export const metadata: Metadata = {
  title: "Khawa Studio",
};

const RootLayout: Layout = (props) => {
  return (
    <html lang="tb">
      <body>{props.children}</body>
    </html>
  );
};

export default RootLayout;

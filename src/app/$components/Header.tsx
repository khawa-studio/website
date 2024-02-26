import Image from "next/image";

import MainContainer from "@/components/MainContainer";

import logo from "@/assets/logo.svg";
import styles from "./Header.module.scss";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  console.log(logo);

  return (
    <MainContainer>
      <div className={styles.header}>
        <Image src={logo} alt="logo" className={styles.logo} />
      </div>
    </MainContainer>
  );
};

export default Header;
export type { HeaderProps };

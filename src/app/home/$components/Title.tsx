import MainContainer from "@/components/MainContainer";

import styles from "./Title.module.scss";

type TitleProps = {};

const Title = (props: TitleProps) => {
  return (
    <MainContainer className={styles.container}>
      <h1 className={styles.title}>
        You can use camel-cased shorthands to construct media queries.
      </h1>
    </MainContainer>
  );
};

export default Title;
export type { TitleProps };

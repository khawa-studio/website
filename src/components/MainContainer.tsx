import { cl } from "@/utils/cl";

import styles from "./MainContainer.module.scss";

type MainContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

const MainContainer = (props: MainContainerProps) => {
  return (
    <div className={cl(styles.container, props.className)}>
      {props.children}
    </div>
  );
};

export default MainContainer;
export type { MainContainerProps };

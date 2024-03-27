import { cl } from "@/utils/cl";

import styles from "./MainContainer.module.css";

const MainContainer = (props: MainContainer.Props) => {
	return (
		<div className={cl(styles.container, props.className)}>
			{props.children}
		</div>
	);
};

namespace MainContainer {
	export type Props = {
		className?: string;
		children?: React.ReactNode;
	};
}

export default MainContainer;

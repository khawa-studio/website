import MainContainer from "./MainContainer";

import styles from "./SharedNavigation.module.css";

const SharedNavigation = (props: SharedNavigation.Props) => {
	return (
		<div className={styles.navigation}>
			<MainContainer className={styles.navigationMain}></MainContainer>
		</div>
	);
};

namespace SharedNavigation {
	export type Props = {};
}

export default SharedNavigation;

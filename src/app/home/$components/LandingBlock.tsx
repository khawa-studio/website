import Image from "next/image";

import SharedNavigation from "@/components/SharedNavigation";
import MainContainer from "@/components/MainContainer";

import background from "@/assets/home_landing_block_background.svg";
import styles from "./LandingBlock.module.css";

const LandingBlock = (props: LandingBlock.Props) => {
	return (
		<div className={styles.block}>
			<div className={styles.background}>
				<Image src={background} alt="" className={styles.backgroundImage} />
			</div>
			{/* <div className={styles.blockInner}>
				<SharedNavigation />
				<div className={styles.content}>
					<div className={styles.contentBackground}>
						<Image src={background} alt="" />
					</div>
				</div>
			</div> */}
		</div>
	);
};

namespace LandingBlock {
	export type Props = {};
}

export default LandingBlock;

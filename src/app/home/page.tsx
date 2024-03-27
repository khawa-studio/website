"use client";

import LandingBlock from "./$components/LandingBlock";

import styles from "./page.module.css";

const HomePage = () => {
	return (
		<main className={styles.main}>
			<LandingBlock />
		</main>
	);
};

export default HomePage;

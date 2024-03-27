import { Metadata } from "next";

import "@/styles/global.css";

import { Layout } from "@/types";

import SharedNavigation from "@/components/SharedNavigation";

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

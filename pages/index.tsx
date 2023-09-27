import React from "react";
import { Communities, Companies, Hero } from "@/components/Home";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/Home.module.scss";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => {
	return (
		<main className={classes("")}>
			<Hero />
			<Companies />
			<Communities />
		</main>
	);
};

export default HomePage;

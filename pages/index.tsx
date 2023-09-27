import React from "react";
import styles from "@/styles/Home.module.scss";
import { stylesConfig } from "@/utils/functions";
import Button from "@/library/Button";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => {
	return (
		<main className={classes("")}>
			<Button theme="filled" size="small">
				Click me
			</Button>
			<Button theme="filled" size="medium">
				Click me
			</Button>
			<Button theme="filled" size="large">
				Click me
			</Button>
			<Button theme="text" size="small">
				Click me
			</Button>
			<Button theme="text" size="medium">
				Click me
			</Button>
			<Button theme="text" size="large">
				Click me
			</Button>
		</main>
	);
};

export default HomePage;

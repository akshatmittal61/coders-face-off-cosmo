import React, { useState } from "react";
import Button from "@/library/Button";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "home-join");

const HomeJoin: React.FC = () => {
	const [email, setEmail] = useState("");
	return (
		<section className={classes("")}>
			<h1>Join our community</h1>
			<p>
				of stargazers, explorers, and cosmic enthusiasts as we embark on
				a journey through the cosmos like never before.
			</p>
			<form action="">
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Button size="large" className={classes("-btn")}>
					Subscribe
				</Button>
			</form>
		</section>
	);
};

export default HomeJoin;

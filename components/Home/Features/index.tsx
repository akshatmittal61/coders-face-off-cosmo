import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { features } from "@/constants/home";

const classes = stylesConfig(styles, "home-features");

const HomeFeatures: React.FC = () => {
	return (
		<section className={classes("")}>
			<div className={classes("-text")}>
				We are committed to making space science accessible to all.
				Explore our educational resources, including
			</div>
			<div className={classes("-boxes")}>
				{features.map((feature, index) => (
					<div className={classes("-box")} key={index}>
						<span className={classes("-box-index")}>
							{`0${index + 1}.`}
						</span>
						<div className={classes("-box-title")}>
							{feature.title}
						</div>
						<div className={classes("-box-description")}>
							{feature.content}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default HomeFeatures;

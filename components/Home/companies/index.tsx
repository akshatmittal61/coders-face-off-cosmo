import React from "react";
import Image from "next/image";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "home-companies");

const HomeCompanies: React.FC = () => {
	return (
		<section className={classes("")}>
			{Array(4)
				.fill(0)
				.map((_, i) => (
					<Image
						key={i}
						src={`/images/companies/${i + 1}.png`}
						alt={`company-${i + 1}`}
						width={200}
						height={200}
						className={classes("-company")}
					/>
				))}
		</section>
	);
};

export default HomeCompanies;

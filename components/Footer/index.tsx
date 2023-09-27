import React from "react";
import { slugify, stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const classes = stylesConfig(styles, "footer");

const Footer: React.FC = () => {
	return (
		<footer className={classes("")}>
			<div className={classes("-top")}>
				<Image
					className={classes("-logo")}
					src="/images/Odyssey.png"
					alt="odyssey"
					width={148}
					height={26}
				/>
				<div className={classes("-center")}>
					{[
						"Stay Connected",
						"Education",
						"Community",
						"About Us",
					].map((item, index) => (
						<Link href={slugify(item)} key={index}>
							{item}
						</Link>
					))}
				</div>
				<div className={classes("-right")}>
					{["Privacy Policy", "Terms & Agreements"].map(
						(item, index) => (
							<Link href={slugify(item)} key={index}>
								{item}
							</Link>
						)
					)}
				</div>
			</div>
			<div className={classes("-bottom")}>
				<a href="mailto:contact@odyssey.com">[contact@odyssey.com]</a>
			</div>
		</footer>
	);
};

export default Footer;

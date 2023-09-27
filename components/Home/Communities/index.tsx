import React from "react";
import { communites } from "@/constants/home";
import Responsive from "@/layouts/Responsive";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "home-communities");

const HomeCommunities: React.FC = () => {
	return (
		<section className={classes("")}>
			<div className={classes("-text")}>
				Join our vibrant community of space enthusiasts where you can
			</div>
			<div className={classes("-boxes")}>
				<Responsive.Row>
					{communites.map((community, i) => (
						<Responsive.Col
							xlg={50}
							lg={50}
							md={50}
							sm={100}
							xsm={100}
							key={i}
						>
							<div className={classes("-box")} key={i}>
								<div className={classes("-box-icon")}>
									{community.icon}
								</div>
								<h2 className={classes("-box-title")}>
									{community.title}
								</h2>
								<p className={classes("-box-content")}>
									{community.content}
								</p>
							</div>
						</Responsive.Col>
					))}
				</Responsive.Row>
			</div>
		</section>
	);
};

export default HomeCommunities;

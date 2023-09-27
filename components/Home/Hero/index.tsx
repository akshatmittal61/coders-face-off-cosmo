import React from "react";
import Image from "next/image";
import Button from "@/library/Button";
import { BsPlayCircleFill } from "react-icons/bs";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "home-hero");

const HomeHero: React.FC = () => {
	return (
		<section className={classes("")}>
			<div className={classes("-box")}>
				Unveiling the Wonders of the Universe
			</div>
			<Image
				src="/images/hero-illustration.png"
				alt="hero-illustration"
				width={1920}
				height={1080}
				className={classes("-graphic")}
			/>
			<div className={classes("-content")}>
				<p className={classes("-text")}>
					At odissey, our mission is to inspire, educate, and ignite
					your passion for the cosmos. We are your premier destination
					for all things related to space exploration, astronomy, and
					the mysteries of the universe. Whether you&apos;re a
					seasoned astronomer or a curious novice, join us on a
					journey to the furthest reaches of the cosmos.
				</p>
				<div className={classes("-actions")}>
					<Button>Get Started</Button>
					<Button
						theme="text"
						icon={<BsPlayCircleFill />}
						iconPosition="left"
					>
						Watch the Video
					</Button>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;

import { FC, useState } from "react";
import CSS from "csstype";
import styles from "./Banner.module.css";
export interface IProps {
	heading: string;
	tagline: string;
	imageUrl: string;
}

// function getStyles(url: string): bgInterface {
// 	return { background: url };
// }
export const Banner: FC<IProps> = ({ heading, tagline, imageUrl }) => {
	return (
		<div
			className={styles.banner}
			style={{
				backgroundImage: `url(${imageUrl})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<div>
				<h1>{heading}</h1>
				<p>{tagline}</p>
			</div>
		</div>
	);
};

import { FC, useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../modal/Modal";
import styles from "./ProductCard.module.css";
export interface IProps {
	product: {
		name: string;
		imageUrl: string;
		tag: string;
		availability: string;
		price: number;
	};
}

export const ProductCard: FC<IProps> = ({
	product: { availability, imageUrl, name, price, tag },
}) => {
	const [modal, setModal] = useState<boolean>(false);
	return (
		<div
			onClick={(event: MouseEvent<HTMLDivElement>) => {
				setModal((prev) => !prev);
			}}
			className={styles.card}
			style={{
				backgroundImage: `url(${imageUrl})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div>
				<p>{name}</p>
				<p>{tag}</p>
				<p>$ {price}</p>
				<p>{availability}</p>
			</div>

			<Modal state={modal} setState={() => setModal(!modal)}>
				<div
					style={{
						height: "100vh",
						width: "80vw",
						backgroundImage: `url(${imageUrl})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						margin: "auto",
						padding: "2rem",
					}}
				>
					<div>
						<p>{name}</p>
						<p>{tag}</p>
						<p>$ {price}</p>
						<p>{availability}</p>
					</div>
				</div>
			</Modal>
		</div>
	);
};

import { FC } from "react";
import { useParams, useLocation } from "react-router-dom";

export interface IProps {
	name?: string;
	imageUrl?: string;
	tag?: string;
	availability?: string;
	price?: number;
}

export const SingleProduct: FC<IProps> = ({
	availability,
	imageUrl,
	name,
	price,
	tag,
}) => {
	const params = useParams();
	const location = useLocation();
	console.log("params", params);
	console.log("location", location);
	return (
		<div
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
		</div>
	);
};

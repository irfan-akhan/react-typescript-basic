import { FC } from "react";
import { ProductCard } from "../productCard/ProductCard";
import styles from "./Section.module.css";

export type Product = {
	name: string;
	imageUrl: string;
	tag: string;
	availability: string;
	price: number;
};
export interface IProps {
	title: string;
	products: Product[];
}

const renderProducts = (products: IProps["products"]) => {
	return products.map((product: Product) => (
		<div key={product.name}>
			<ProductCard product={product} />
		</div>
	));
};

export const Section: FC<IProps> = ({ title, products }) => {
	return (
		<section className={styles.container}>
			<h2>{title}</h2>
			<div>{renderProducts(products)}</div>
		</section>
	);
};

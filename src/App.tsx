import { FC, useEffect, useState } from "react";

import "./App.css";
import { Banner } from "./components/banner/Banner";
import { Product, Section } from "./components/section/Section";
const products: Product[] = [
	{
		name: "Nike Air xoxo",
		imageUrl:
			"https://media.istockphoto.com/photos/young-man-shopping-shoes-picture-id1292261872?b=1&k=20&m=1292261872&s=170667a&w=0&h=AA5F-5LPlJJjqpUqB5UjCuYhk5YnNEEcEAqa5Ya4lEA=",
		tag: "Nile air is priceless",
		availability: "In Stock",
		price: 999,
	},
	{
		name: "Air Jordon 5",
		imageUrl:
			"https://bofrike.in/wp-content/uploads/2020/07/Neon-green-sneaker17.jpg",

		tag: "AIr jordan is one of a kind",
		availability: "out of Stock",
		price: 1999,
	},
	{
		name: "Addidas X5 me",
		imageUrl:
			"https://cdn.sanity.io/images/c1chvb1i/production/b8182474dc9c06733148e2a5d6ef9ac3cc9f1afc-1000x600.png",

		tag: "X5 is weightless",
		availability: "In Stock",
		price: 450,
	},
	{
		name: "Reebok blood red",
		imageUrl:
			"https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/_resampled/FillWyIxMDI0IiwiNTEyIl0/060518-SneakerEvent-BU-EventName-EventBanner-Tall-1536x924-Final2.jpg",

		tag: "Rebook blood edition",
		availability: "In Stock",
		price: 850,
	},
	{
		name: "Balenciaga Sloth",
		imageUrl:
			"https://www.thehypeplace.com/modules/htmlbanners1/views/img/upload/56e83b5b8c5651a023c91466b9d7167ed79553f5_banner-doppio-1.jpg",

		tag: "Balanciaga Sloth is one piece",
		availability: "In Stock",
		price: 500,
	},
];
const images: string[] = [
	"https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/_resampled/FillWyIxMDI0IiwiNTEyIl0/060518-SneakerEvent-BU-EventName-EventBanner-Tall-1536x924-Final2.jpg",
	"https://cdn.sanity.io/images/c1chvb1i/production/b8182474dc9c06733148e2a5d6ef9ac3cc9f1afc-1000x600.png",
	"https://www.thehypeplace.com/modules/htmlbanners1/views/img/upload/56e83b5b8c5651a023c91466b9d7167ed79553f5_banner-doppio-1.jpg",
	"https://media.istockphoto.com/photos/young-man-shopping-shoes-picture-id1292261872?b=1&k=20&m=1292261872&s=170667a&w=0&h=AA5F-5LPlJJjqpUqB5UjCuYhk5YnNEEcEAqa5Ya4lEA=",
];

const App: FC = () => {
	const [idx, setIdx] = useState<number>(0);

	useEffect(() => {
		const timer = setInterval((): void => {
			setIdx((prev: number): number => {
				if (prev === images.length - 1) return 0;
				return prev + 1;
			});
		}, 2000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="App">
			<h1>SHOP NOW</h1>

			<Banner
				heading="Sneaker Store"
				tagline="Your one shop place for sneakers"
				imageUrl={images[idx]}
			/>
			<Section title="trending" products={products} />
		</div>
	);
};

export default App;

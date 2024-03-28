import Card from "../components/Card";
import Banner from "../components/Banner";
import bannerHomePage from "../assets/banners/banner-home.png";

export default function Home() {
	return (
		<div className="banner-homepage">
			<Banner
				image={bannerHomePage}
				title={"Chez vous, partout et ailleurs"}
			/>
			<Card />
		</div>
	);
}

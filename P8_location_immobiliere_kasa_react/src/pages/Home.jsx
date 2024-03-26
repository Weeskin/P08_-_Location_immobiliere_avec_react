import Card from "../components/Card";
import Banner from "../components/Banner";

export default function Home() {
	return (
		<div>
			<section className="banner-homepage">
				<Banner />
				<Card />
			</section>
		</div>
	);
}

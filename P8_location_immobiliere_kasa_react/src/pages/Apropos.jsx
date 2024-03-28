import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import bannerAproposPage from "../assets/banners/banner-apropos.png";
import aproposData from "../data/apropos.json";

export default function Apropos() {
	//state
	const collapseContent = aproposData.map((item) => (
		<Collapse
			key={item.id}
			title={item.title}
			description={item.description}
		/>
	));

	//rendu
	return (
		<div className="apropos-page">
			<Banner image={bannerAproposPage} />
			<div className="collapse-container_apropos">{collapseContent}</div>
		</div>
	);
}

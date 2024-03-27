import image from "../assets/banners/banner-home.png";

export default function Banner() {
	return (
		<div className="banner">
			<img
				className="banner-image"
				src={image}
				alt="banner"
			/>
			<div className="banner-background"></div>
			<div className="banner-title">Chez vous, partout et ailleurs</div>
		</div>
	);
}

import PropTypes from "prop-types";

export default function Banner({ image, title }) {
	return (
		<div className="banner">
			<img
				className="banner-image"
				src={image}
				alt="banner"
			/>
			<div className="banner-background"></div>
			<div className="banner-title">{title}</div>
		</div>
	);
}

Banner.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string
};

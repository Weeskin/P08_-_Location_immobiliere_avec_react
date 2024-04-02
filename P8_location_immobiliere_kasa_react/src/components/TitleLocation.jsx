import PropTypes from "prop-types";
export default function TitleLocation({ title, location }) {
	return (
		<div className="label-container">
			{" "}
			<h1 className="title-location">{title}</h1>{" "}
			<p className="subtitle-location">{location}</p>
		</div>
	);
}
TitleLocation.propTypes = {
	title: PropTypes.string,
	location: PropTypes.string
};

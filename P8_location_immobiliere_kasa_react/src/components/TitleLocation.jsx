import PropTypes from "prop-types";
export default function TitleLocation({ title, location }) {
	return (
		<div className="title-location">
			{" "}
			<h1>{title}</h1> <p>{location}</p>{" "}
		</div>
	);
}
TitleLocation.propTypes = {
	title: PropTypes.string,
	location: PropTypes.string
};

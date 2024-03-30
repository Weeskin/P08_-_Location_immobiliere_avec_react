import propTypes from "prop-types";
export default function Tags({ tags }) {
	return (
		<div className="tags">
			{tags.map((tag, index) => (
				<span key={index}>{tag}</span>
			))}
		</div>
	);
}

Tags.propTypes = {
	tags: PropTypes.string.isRequired
};

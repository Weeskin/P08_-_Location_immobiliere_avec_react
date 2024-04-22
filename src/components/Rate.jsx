import StarActive from "../assets/stars/star-active.png";
import StarInactive from "../assets/stars/star-inactive.png";
import PropTypes from "prop-types";

export default function Rate({ rating }) {
	const range = [1, 2, 3, 4, 5];
	const countRating = parseInt(rating, 10);

	return (
		<div className="rate">
			{range.map((rangeItem) =>
				countRating >= rangeItem ? (
					<img
						className="star"
						key={rangeItem.toString()}
						src={StarActive}
						alt="star rate"
					/>
				) : (
					<img
						className="star"
						key={rangeItem.toString()}
						src={StarInactive}
						alt="star rate"
					/>
				)
			)}
		</div>
	);
}

Rate.propTypes = {
	rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

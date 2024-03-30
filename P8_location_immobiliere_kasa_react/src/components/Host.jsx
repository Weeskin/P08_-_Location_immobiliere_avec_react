import PropTypes from "prop-types";

export default function Host({ name, picture }) {
	const [firstName, lastName] = name.split(" ");

	return (
		<div className="host-profil">
			<p>
				{firstName}
				<br />
				{lastName}
			</p>
			<img
				className="host-picture"
				src={picture}
				alt={name}
			/>
		</div>
	);
}

Host.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired
};

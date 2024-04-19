import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="navbar">
			<nav>
				<Link
					className="link"
					to="/"
				>
					Accueil
				</Link>
				<Link
					className="link"
					to="/apropos"
				>
					À propos
				</Link>
			</nav>
		</div>
	);
}

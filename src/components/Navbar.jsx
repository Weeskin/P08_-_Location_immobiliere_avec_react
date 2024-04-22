import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();

	return (
		<div className="navbar">
			<nav>
				<Link
					className={`link ${location.pathname === "/" ? "active" : ""}`}
					to="/"
				>
					Accueil
				</Link>
				<Link
					className={`link ${location.pathname === "/apropos" ? "active" : ""}`}
					to="/apropos"
				>
					À propos
				</Link>
			</nav>
		</div>
	);
}

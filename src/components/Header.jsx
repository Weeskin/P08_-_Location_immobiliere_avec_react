import logo from "../assets/logo/logo-header.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<Link to="/">
				<div className="logo">
					<img
						className="logo-kasa"
						src={logo}
						alt="logo d'agence"
					></img>
				</div>
			</Link>
			<Navbar />
		</header>
	);
}

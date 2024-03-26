import logo from "../assets/logo/logo-header.png";
import Navbar from "./Navbar";

export default function Header() {
	return (
		<div className="header">
			<div className="logo">
				<img
					className="logo-kasa"
					src={logo}
					alt="logo d'agence"
				/>
			</div>
			<Navbar />
		</div>
	);
}

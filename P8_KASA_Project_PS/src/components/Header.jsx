import logo from "../assets/images/react-banner.png";
const Header = () => {
	return (
		<div className="header">
			<img
				src={logo}
				alt="logo"
			/>
			<nav>
				<li>Accueil</li>
				<li>À propos</li>
			</nav>
		</div>
	);
};

export default Header;

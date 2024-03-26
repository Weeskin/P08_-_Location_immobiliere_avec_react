import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Appartements from "../pages/Appartements";
import Apropos from "../pages/Apropos";

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/apropos"
					element={<Apropos />}
				/>
				<Route
					path="/appartements"
					element={<Appartements />}
				/>
				<Route
					path="/*"
					element={<Error />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

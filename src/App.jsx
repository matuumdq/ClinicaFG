import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import MainLayout from "./components/MainLayout";
import KnowUs from "./components/KnowUs";
import Tratamientos from "./components/Tratamientos";
import ContactPage from "./components/ContactPage";
import SingleCourse from "./components/SingleCourse";
import { useEffect } from "react";
import Insumos from "./components/Insumos";

function App() {
	function ScrollToTop() {
		const { pathname } = useLocation();

		useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);

		return null;
	}

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="/conocenos" element={<KnowUs />} />
					<Route path="/cursos" element={<Tratamientos />} />
					<Route path="/insumos" element={<Insumos />} />
					{/* <Route
						path="/tratamientos/:name"
						element={<SingleTrat />}
					/> */}
					<Route path="/cursos/:name" element={<SingleCourse />} />
					<Route path="/contactanos" element={<ContactPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

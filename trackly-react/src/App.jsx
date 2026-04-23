import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Organization from "./pages/Organizations";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/organization" element={<Organization />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

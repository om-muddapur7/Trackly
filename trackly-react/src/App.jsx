import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Organization from "./pages/Organizations";
import Board from "./pages/Boards";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/organization" element={<Organization />} />
				<Route path="/board/:orgId" element={<Board />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

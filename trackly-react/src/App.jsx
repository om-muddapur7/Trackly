import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Organization from "./pages/Organizations";
import Board from "./pages/Boards";
import Issues from "./pages/Issues";
import SignIn from "./pages/Signin";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signin" element={<SignIn />} />
				<Route path="/" element={<Home />} />
				<Route path="/organization" element={<Organization />} />
				<Route path="/board/:orgId" element={<Board />} />
				<Route path="/issue/:brdId" element={<Issues />} />
			</Routes>

			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;

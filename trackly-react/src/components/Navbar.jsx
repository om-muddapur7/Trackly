import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
	const navigate = useNavigate();

	function signout() {
		localStorage.removeItem("token");
		alert("Signing out...");
		navigate("/signin");
	}

	return (
		<nav className="navbar">
			<div className="nav-left">
				<span className="logo">Trackly</span>
			</div>

			<div className="nav-center">
				<Link to="/">Home</Link>
				<Link to="/organization">Organizations</Link>
				<Link to="/organization">Boards</Link>
				<Link to="/organization">Issues</Link>
			</div>

			<div className="nav-right">
				<button className="nav-btn" onClick={signout}>
					Logout
				</button>
			</div>
		</nav>
	);
}

export default Navbar;

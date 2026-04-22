import "../styles/Footer.css"; 
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
	return (
		<footer className="footer">
			<p>© 2026 Trackly. All rights reserved.</p>

			<div className="footer-content">
				<div className="social-links">
					<a href="#" target="_blank" rel="noreferrer">
						<i className="fa-brands fa-github"></i>
					</a>
					<a href="#" target="_blank" rel="noreferrer">
						<i className="fa-brands fa-linkedin"></i>
					</a>
					<a href="#" target="_blank" rel="noreferrer">
						<i className="fa-brands fa-x-twitter"></i>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

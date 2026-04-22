function signout() {
	localStorage.removeItem("token");

	alert("Signing out...");
	window.location = "/signin";
}
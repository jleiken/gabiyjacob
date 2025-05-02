let collapsed = false;

window.addEventListener("scroll", () => {
	const header = document.getElementById("hero");
	let body = document.body;
	let html = document.documentElement;

	let docHeight = Math.max(body.scrollHeight, body.offsetHeight, 
		html.clientHeight, html.scrollHeight, html.offsetHeight );

	if (window.scrollY > 80) {
		header.classList.add("collapsed");
		collapsed = true;
	} else if (collapsed && docHeight <= screen.height) {
		// The page is so short that re-expanding the header will make it jittery, so just add padding to the body that's the same height as the header
		document.getElementsByTagName("main")[0].style.paddingTop = header.clientHeight;
	} else if (collapsed && window.scrollY > 5) {
		// Do nothing, because the header is collapsed and we don't want to expand it unless someone scrolls almost all the way back to the top
	} else {
		header.classList.remove("collapsed");
	}
});
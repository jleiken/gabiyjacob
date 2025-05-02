let collapsed = false;

window.addEventListener("scroll", () => {
	const header = document.getElementById("hero");

	if (window.scrollY > 80) {
		header.classList.add("collapsed");
		collapsed = true;
	} else if (collapsed && window.scrollY > 5) {
		// Do nothing, because the header is collapsed and we don't want to expand it unless someone scrolls almost all the way back to the top
	} else {
		header.classList.remove("collapsed");
	}
});
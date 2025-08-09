
window.addEventListener("load", () => {
	// Add hero
	const header = document.getElementById("hero");
	header.innerHTML = `
	<h1>Gabi y Jacob</h1>
	<p>Are Getting Married! ~ Se Están Casando!</p>
	<p>July 4, 2026</p>

	<nav id="mainNav" class="nav">
		<ul>
			<li><a href="index.html">Home<br>Inicio</a></li>
			<li><a href="schedule.html">Schedule<br>Horario</a></li>
			<li><a href="travel.html">Travel Details<br>Detalles de Viajes</a></li>
			<li><a href="colombia.html">Visit Colombia<br>Visitar Colombia</a></li>
		</ul>
	</nav>

	<div class="wave-divider">
		<svg viewBox="0 0 1440 100" preserveAspectRatio="none">
			<path d="M0,50 C480,150 960,-50 1440,50 L1440,100 L0,100 Z" fill="var(--background-color)"></path>
		</svg>
	</div>`;

	// Add footer
	const footer = document.getElementsByTagName("footer")[0];
	footer.innerHTML = `<p>Con amor, Gabi y Jacob</p>`;

	// Add any squiggles
	const squiggles = document.getElementsByClassName("squiggle");
	for (let i = 0; i < squiggles.length; i++) {
		squiggles[i].innerHTML = `
		<svg width="100%" height="75" viewBox="0 0 500 40" xmlns="http://www.w3.org/2000/svg">
			<path d="M0,35 Q35,0 100,35 T200,35 T300,35 T400,35 T500,35"
				fill="transparent"
				stroke="#C9704D"
				stroke-width="8"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</svg>`;
	}
});
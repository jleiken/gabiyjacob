
window.addEventListener("load", () => {
	const header = document.getElementById("hero");
	header.innerHTML = `
	<h1>Gabi y Jacob</h1>
	<p>Are Getting Married! ~ Se Están Casando!</p>
	<p>May 28, 2026</p>

	<nav id="mainNav" class="nav">
		<ul>
			<li><a href="index.html">Home<br>Inicio</a></li>
			<li><a href="details.html">Details<br>Detalles</a></li>
			<li><a href="schedule.html">Schedule<br>Horario</a></li>
			<li><a href="faqs.html">FAQs<br>Preguntas</a></li>
		</ul>
	</nav>

	<div class="wave-divider">
		<svg viewBox="0 0 1440 100" preserveAspectRatio="none">
			<path d="M0,50 C480,150 960,-50 1440,50 L1440,100 L0,100 Z" fill="var(--background-color)"></path>
		</svg>
	</div>`;
	
	const footer = document.getElementsByTagName("footer")[0];
	footer.innerHTML = `<p>Con amor, Gabi y Jacob</p>`;
});
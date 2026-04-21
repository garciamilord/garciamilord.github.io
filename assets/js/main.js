/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function() {
	var body = document.body;
	var year = document.getElementById('year');

	window.addEventListener('load', function() {
		window.setTimeout(function() {
			body.classList.remove('is-preload');
		}, 100);
	});

	if (year) {
		year.textContent = new Date().getFullYear();
	}
})();

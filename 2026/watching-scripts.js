function reveal(n) {
	var cover = document.getElementById(n);
	cover.classList.add("visible");
}

function hide(n) {
	var cover = document.getElementById(n);
	cover.classList.remove("visible");
}
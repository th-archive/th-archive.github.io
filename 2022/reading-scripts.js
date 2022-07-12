function reveal(n) {
	var cover = document.getElementById(n);
	cover.classList.add("visible");
}

function hide(num) {
	var img = document.getElementById(num);
	img.classList.remove("visible");
}
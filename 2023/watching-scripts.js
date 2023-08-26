function spotlight(n) {
	var spotlit = document.getElementsByClassName("spotlight");
	for (i = 0; i < spotlit.length; i++) {
		spotlit[i].classList.remove("spotlight");
	}
	
	var num = document.getElementById(n);
	num.classList.add("spotlight");
}
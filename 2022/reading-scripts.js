function reveal(n) {
	var cover = document.getElementById(n);
	cover.classList.add("visible");
}

function hide(num) {
	var img = document.getElementById(num);
	img.classList.remove("visible");
}

function toggle(pageNum) {
	var mains = document.getElementsByTagName("main");
	var pseudoMains = document.getElementsByClassName("pseudo-main");
	var toggles = document.getElementsByClassName("toggle");
	for (var i = 0; i < mains.length; i++) {
		mains[i].classList.remove("active");
		pseudoMains[i].classList.remove("active");
		toggles[i].classList.remove("active");
	}
	var pageNums = document.getElementsByClassName(pageNum);
	for (var j = 0; j < pageNums.length; j++) {
		pageNums[j].classList.add("active");
	}
}
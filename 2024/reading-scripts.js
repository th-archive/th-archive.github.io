const main = document.querySelector("main");
const columnRevs = document.querySelectorAll(".column-reverse");
const columnH2 = document.querySelectorAll(".column-reverse h2");
const columnImg = document.querySelectorAll(".column-reverse img");
const columnRevHeight = columnRevs[0].clientHeight

main.addEventListener("scroll", (event) => {
		var offset = 2 * main.scrollTop;
		columnRevs[0].style.transform = `translateY(${offset}px)`;
		columnRevs[1].style.transform = `translateY(${offset}px)`;

		if (main.scrollTop >= 648) {
			main.scrollTo({top: 0})
		}
});
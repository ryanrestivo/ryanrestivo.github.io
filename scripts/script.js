// change first job in array to green - to make it most recent - CSS style change
document.querySelectorAll(".position")[0].setAttribute("style", "color: green;")

/// currently applies to first a link
const LINK = document.querySelector(".links a");
if ((LINK).hasAttribute("target")) {
console.log(LINK.getAttribute("target"));
} else {
	LINK.setAttribute("target", "_blank");
}

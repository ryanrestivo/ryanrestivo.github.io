// change first job in array to green - to make it most recent - CSS style change
document.querySelectorAll(".position")[0].setAttribute("style", "color: green;")

/// currently applies to first a link
const LINK = document.querySelector(".links a");
if ((LINK).hasAttribute("target")) {
console.log(LINK.getAttribute("target"));
} else {
	LINK.setAttribute("target", "_blank");
}

function Job(title,place,duration) {
  this.title = title;
  this.place = place;
  this.duration = duration;
}

var jobNewsday2 = new Job("Project Manager, Mobile Apps","Newsday","January 2019 - Present");
var jobNewsday1 = new Job("Editorial Development Coordinator","Newsday","May 2016 - December 2018");
var jobMLB = new Job("Content Coordinator","MLB Advanced Media","June 2009 - April 2016");
var jobESPN = new Job("Quality Assurance Associate","ESPN Digital Media","September 2008 - June 2009");

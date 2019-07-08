/// make all links in new window
var extLinks = document.querySelectorAll('a[href^="http"]');
for (var i = 0; i < extLinks.length; i++) {
  if (!extLinks[i].hasAttribute("target")) {
    extLinks[i].setAttribute("target","_blank");
  }
}

// change first job in array to green - to make it most recent - CSS style change
// document.querySelectorAll(".position")[0].setAttribute("style", "color: green;")

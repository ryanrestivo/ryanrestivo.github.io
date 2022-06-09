


/// make all links in new window
var extLinks = document.querySelectorAll('a[href^="http"]');
for (var i = 0; i < extLinks.length; i++) {
  if (!extLinks[i].hasAttribute("target")) {
    extLinks[i].setAttribute("target","_blank");
  }
}

// change first job in array to green - to make it most recent - CSS style change
// document.querySelectorAll(".position")[0].setAttribute("style", "color: green;")


// LEARNING MORE JAVASCRIPT 1/20/21
var browser = navigator.appCodeName;
var app = navigator.appName;
var platform = navigator.platform;
var vendorName = navigator.vendor;
var cookies = navigator.cookieEnabled;

console.log("Thank you for using your " + browser + " " + app + " browser on this page. I appreaicte you using the "+ platform + " as well, and it's good to know you support " +
vendorName + " in their work to conquer the browsing world.")
if (cookies === true) {
  console.log("Glad to know you have cookies enabled, though I'm not going to store any on your browser... ");
} else {
  console.log("Look at you, Mr. Privacy, no cookies enabled eh?!");
}


/// Open up a window to be viewed... this is just to test...
// var answer = window.prompt("Welcome to the page, type anything here in this line below.");
//console.log("The user typed in " + answer)

console.log(Date.now());

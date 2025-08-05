const navbar = document.getElementById("navbar");

const aboutDiv = document.getElementById("about");
let scrollAboutTop = false;

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {

  scrollAboutTop = aboutDiv.scrollTop === 0;
  
  if (scrollAboutTop) {
    console.log("You've reached the top of the #about section!");
    // Add your logic for top-scroll behavior here
    navbar.style.top = "0";
  }
  
  const currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0"; //scrolling up - show scrollbar
  }
  else {
    navbar.style.top = "-59px"; // - hide scrollbar
  } 

  prevScrollPos = currentScrollPos;
});

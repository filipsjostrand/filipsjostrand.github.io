const navbar = document.getElementById("navbar");

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {

  const currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0"; //scrolling up - show scrollbar
  }
  else {
    navbar.style.top = "-59px"; // - hide scrollbar
  } 

  prevScrollPos = currentScrollPos;
});

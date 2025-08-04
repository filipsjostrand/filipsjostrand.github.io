const navbar = document.getElementById("navbar");

var isScrollingUp = false; 
var isScrollingDown = false;
          
let prevScrollPos = window.pageYOffset;

  window.addEventListener("scroll", function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      // Scrolling up — show navbar
      isScrollingUp = true;
      isScrollingDown = false;
      
      navbar.style.top = "0";
    } else if (prevScrollPos < currentScrollPos) {
      // Scrolling down — hide navbar
      isScrollingDown = true;
      isScrollingUp = false;
      navbar.style.top = "-59px"; // adjust based on navbar height
    }
           prevScrollPos = currentScrollPos                                   
  });

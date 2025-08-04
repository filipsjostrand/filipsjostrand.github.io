let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

let isScrolling;

window.addEventListener('scroll', function () {
  const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      // Scrolling up — show navbar
      navbar.style.top = "0";
    } else {
      // Scrolling down — hide navbar
      navbar.style.top = "-100px"; // adjust based on navbar height
    }
  
  window.clearTimeout(isScrolling);

  isScrolling = setTimeout(function () {
    // Scrolling has stopped!
    console.log('User has stopped scrolling');
    
    // You can call a function here, like:
    showNavbar(); 
  }, 300); // adjust delay as needed (300ms is typical)
  prevScrollPos = currentScrollPos;
});

function showNavbar() {
  const navbar = document.getElementById("navbar");
  navbar.style.top = "0"; // or fade it in, etc.
}

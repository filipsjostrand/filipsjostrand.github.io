const navbar = document.getElementById("navbar");
const todosNav = document.getElementById("top-todos");
const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const hideText = document.getElementById("hide-nav-text");
    let lastScrollTop = 0;
    let isNavInActive = false;
    let isManuallyToggled = false;
    let scrollTimeout;

    // Manual toggle
    if (navbar && hideText) {
      hideText.addEventListener("click", function () {
        console.log("hideText clicked");

        isNavInActive = !isNavInActive;
        isManuallyToggled = true;

        if (isNavInActive) {
          navbar.style.top = "-59px";
          hideText.innerText = "☰";
          hideText.style.fontSize = "20px";
        } else {
          navbar.style.top = "0";
          hideText.innerText = "❌ Navbar";
          hideText.style.fontSize = "16px";
        }

        // Temporarily disable scroll logic
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isManuallyToggled = false;
        }, 1500); // Delay before scroll regains control
      });
    }

    // Scroll logic
    window.addEventListener("scroll", function () {
      if (isManuallyToggled) return; // Skip scroll behavior if manually toggled recently

      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.style.top = "-59px";
      } else {
        // Scrolling up
        navbar.style.top = "0";
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // Show navbar when clicking anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function () {
        navbar.style.top = "0";
      });
    });
  });


var navClicked = false;

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {

  const currentScrollPos = window.pageYOffset;

todosNav.addEventListener('click', function () {
  //prevScrollPos = 3400;
    //navClicked = !navClicked;
  if (prevScrollPos < currentScrollPos) {
    navClicked = true
  }
  //navClicked = true;
  console.log("A")
})
weekNav.addEventListener('click', function () {
  //prevScrollPos = 3400;
    if (prevScrollPos < currentScrollPos) {
    navClicked = true
  }
  //navClicked = true;
  console.log("B")
})
planNav.addEventListener('click', function () {
  //prevScrollPos = 3400;
    if (prevScrollPos < currentScrollPos) {
    navClicked = true
  }
  //navClicked = true;
  console.log("C")
})
timerNav.addEventListener('click', function () {
  //prevScrollPos = 3400;
    if (prevScrollPos < currentScrollPos) {
    navClicked = true
  }
  //navClicked = true;
  console.log("D")
})
aboutNav.addEventListener('click', function () {
  //prevScrollPos = 3400;
   if (prevScrollPos < currentScrollPos) {
    navClicked = true
  }
  //navClicked = true;
  console.log("E")
})
  

  if (prevScrollPos > currentScrollPos && navClicked === false) {
    console.log("prevScrollPos > currentScrollPos (i scroll) = " + prevScrollPos > currentScrollPos)
    navbar.style.top = "0"; //scrolling up - show scrollbar
    console.log("scroll up - std ... show navbar (1)")
  }
  else if (prevScrollPos > currentScrollPos && navClicked === true) {
    console.log("prevScrollPos > currentScrollPos (i scroll) = " + prevScrollPos > currentScrollPos)
    navbar.style.top = "0"; //scrolling up - show scrollbar
    console.log("scroll up - std ... show navbar (2)")
    //navClicked = false;
  }
  else if (prevScrollPos < currentScrollPos && navClicked === true) {
    console.log("scroll down - std ... show navbar (3)")
    navbar.style.top = "0"; //scrolling up - show scrollbar
    //navClicked = false;
    //navClicked = !navClicked;
  }
  else if (prevScrollPos < currentScrollPos && navClicked === false) {
    console.log("scroll down - std ... hide navbar (4)")
    navbar.style.top = "-59px"; // - hide scrollbar
    //navClicked = !navClicked;
  } 
  //else if (prevScrollPos === currentScrollPos) {
    //navbar.style.top = "0"; //scrolling up - show scrollbar
    //navClicked = false;
    //console.log("scroll up - std ... show navbar (5)")
  //} 

  //navClicked = false;
  prevScrollPos = currentScrollPos;
});

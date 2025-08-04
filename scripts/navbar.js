const weekNav = document.getElementById("weekly-calendar");
const planNav = document.getElementById("important-dates");
const timerNav = document.getElementById("timer");
const aboutNav = document.getElementById("about-me");

let scrollPositionWeek, scrollPositionPlan, scrollPositionTimer, scrollPositionAbout;

// Helper function to compare scrollTop and window.scrollY
function checkScrollMatch(element, label) {
  if (element.scrollTop === window.scrollY) {
    console.log(`${label} matches window.scrollY`);
    return window.scrollY;
  } 
  
  //else {
    //console.log(`${label} does not match window.scrollY`);
    //return null;
  //}
}

// Run comparisons
scrollPositionWeek = checkScrollMatch(weekNav, "WeekNav");
scrollPositionPlan = checkScrollMatch(planNav, "PlanNav");
scrollPositionTimer = checkScrollMatch(timerNav, "TimerNav");
scrollPositionAbout = checkScrollMatch(aboutNav, "AboutNav");

  let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  //let scrollPositionWeek;

  window.addEventListener("scroll", function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      // Scrolling up — show navbar
      navbar.style.top = "0";
    } else if (prevScrollPos < currentScrollPos){
      // Scrolling down — hide navbar
      navbar.style.top = "-59px"; // adjust based on navbar height
    }

    prevScrollPos = currentScrollPos;

    const myDiv = document.getElementById("myDiv");
    
    // Compare scroll values
    if (weekNav.scrollTop === window.scrollY) {
      console.log("Scroll positions match!");
      scrollPositionWeek = window.scrollY;
    }
    
    if (window.scrollY === scrollPositionWeek || window.scrollY === scrollPositionPlan || window.scrollY === scrollPositionTimer || window.scrollY === scrollPositionAbout) {
      navbar.style.top = "0";
    }
  });

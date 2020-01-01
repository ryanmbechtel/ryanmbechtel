// call animateClickScroll and updateNavbar on window load
window.onload = function() {animateClickScroll(); updateNavbar()};
// call updateNavbar on page scroll
window.onscroll = function() {updateNavbar()};

// get navbar
var navbar = document.getElementById("myNav");
// get navbar's offset
var navOffset = navbar.offsetTop;

// get nav links
var navLinks = document.querySelectorAll("nav ul li a");
// get each section of page
var sections = document.querySelectorAll("section");

function animateClickScroll() {
	navLinks.forEach(link => {
		let section = document.querySelector(link.hash);
		link.onclick = function() {
			$('html, body').animate({
        scrollTop: $(section).offset().top
    }, 400);
		};
		

	});

}

// adjusts navbar's stickiness and active links according to user's position on page
function updateNavbar() {
	let curPos = window.pageYOffset;

	// make nav stick to top once reached
  if (curPos >= navOffset) {
    navbar.classList.add("sticky-nav")
  } else {
  	navbar.classList.remove("sticky-nav");
  }

  // set active nav link for each section when user reaches it in page
  navLinks.forEach(link => {
  	let section = document.querySelector(link.hash);
  	if (
      section.offsetTop <= curPos &&
      section.offsetTop + section.offsetHeight > curPos
    ) {
      link.classList.add("active-nav-link");
    } else {
      link.classList.remove("active-nav-link");
    }
  });

}
// call animateClickScroll and updateNavbar on window load
window.onload = function() {animateClickScroll(); updateNavbar()};
// call updateNavbar on page scroll
window.onscroll = function() {updateNavbar()};

// get navbar
var navbar = document.getElementById("myNav");
// get navbar's offset
var navOffset = navbar.offsetTop;
console.log(navOffset);

// get nav links
var navLinks = document.querySelectorAll("nav ul li a");
// get each section of page
var sections = document.querySelectorAll("section");

function animateClickScroll() {
	// add scroll animation from home section button to about section
	let aboutLink = document.getElementById("home-header-link");
	aboutLink.onclick = function() {
		$('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 600);
	};
	// add scroll animation from navbar clicks to associated section
	navLinks.forEach(link => {
		let section = document.querySelector(link.hash);
		link.onclick = function() {
			$('html, body').animate({
        scrollTop: $(section).offset().top
    }, 600);
		};
	});
}


// adjusts navbar's stickiness and active links according to user's position on page
function updateNavbar() {
	let curPos = window.pageYOffset;
  console.log("curPos = " + curPos);
	// make nav stick to top once reached
  if (curPos - 1 >= navOffset) {
    navbar.classList.add("sticky-nav");
    console.log("ADD sticky");
  } else {
  	navbar.classList.remove("sticky-nav");
    console.log("REMOVE sticky");
  }

  // set active nav link for each section when user reaches it in page
  navLinks.forEach(link => {
  	let section = document.querySelector(link.hash);
  	if (
      section.offsetTop - 180 <= curPos &&
      section.offsetTop + section.offsetHeight - 180 > curPos
    ) {
      link.classList.add("active-nav-link");
    } else {
      link.classList.remove("active-nav-link");
    }
  });

}
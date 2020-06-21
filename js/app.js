/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll("main section")
const nav = document.getElementById("navbar__list")
const navLinks = document.getElementsByClassName("menu__link")
const toTopBtn = document.getElementById("btn");

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
buildNav = () => {
    for (let i = 0; i < sections.length; i++) {
        nav.innerHTML += `<li><a href="javascript:void(0)"  class="menu__link" >${sections[i].getAttribute('data-nav')}</a></li>`

    }
}
buildNav();
let navLinksArr = Array.from(navLinks);

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", () => {

    //  console.log(scrollY);
    if (window.scrollY > 421 && window.scrollY < 990) {
        console.log("hi from the world")
        sections[0].classList.add("your-active-class");
        navLinks[0].classList.add("active")
        // sections[0].style.backgroundColor = "white"

    } else {
        sections[0].classList.remove("your-active-class");
        navLinks[0].classList.remove("active")
    }
    if (window.scrollY > 991 && window.scrollY < 1560) {
        sections[1].classList.add("your-active-class")
        navLinks[1].classList.add("active")
    } else {
        sections[1].classList.remove("your-active-class")
        navLinks[1].classList.remove("active")
    }
    if (window.scrollY > 1561 && window.scrollY < 2100) {
        sections[2].classList.add("your-active-class")
        navLinks[2].classList.add("active")
    } else {
        sections[2].classList.remove("your-active-class")
        navLinks[2].classList.remove("active")
    }
    if (window.scrollY > 2101 && window.scrollY < 2610) {
        sections[3].classList.add("your-active-class")
        navLinks[3].classList.add("active")
    } else {
        sections[3].classList.remove("your-active-class")
        navLinks[3].classList.remove("active")
    }
    if (window.scrollY > 2611 && window.scrollY < 3313) {
        sections[4].classList.add("your-active-class")
        navLinks[4].classList.add("active")
    } else {
        sections[4].classList.remove("your-active-class")
        navLinks[4].classList.remove("active")
    }
    if (window.scrollY > 3314 && window.scrollY < 4000) {
        sections[5].classList.add("your-active-class")
        navLinks[5].classList.add("active")
    } else {
        sections[5].classList.remove("your-active-class")
        navLinks[5].classList.remove("active")
    }



})

// Scroll to anchor ID using scrollTO event
const positions = [421, 991, 1561, 2101, 2611, 3314]

nav.addEventListener("click", (ev) => {
        // console.log(ev)
        if (ev.target.className == "menu__link") {
            const navText = ev.target.innerHTML;
            const navNum = navText.charAt(8) - 1
            console.log("the text insidee nav link is " + navText);
            console.log("the num. of the link " + navNum)
            console.log("the postion is " + positions[navNum])
            //            window.scrollTo(10, positions[navNum])
            window.scrollTo({
                top: positions[navNum],
                behavior: 'smooth'
            });
        }
    }

)
/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active


// to top button 

// show the button when scroll starting
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        toTopBtn.style.display = "block";
    } else {

        toTopBtn.style.display = "none";
    }


})

// click on the button to scroll to the top of the pg
toTopBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

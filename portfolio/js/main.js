"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", function(){
    // console.log(window.scrollY);
    // console.log(`navbarHeight: ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");
    } else {
        navbar.classList.remove("navbar--dark");
    }  
});

// Navbar menus tapping to moving

const menuTap = document.querySelector(".navbar__menu");

menuTap.addEventListener("click", function(event){
    const target = event.target;
    const link = target.dataset.link;
    
    if(link == null){
        return
    }

    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:"smooth"});
});


//Contact me tapping to moving

const homeContactBtm = document.querySelector(".home__contact");

homeContactBtm.addEventListener("click", function(){
    const scrollTo = document.querySelector("#contact");
    scrollTo.scrollIntoView({behavior:"smooth"});
});
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

// Arrow Button to Scroll Up
const arrowUpBtn = document.querySelector(".arrow-up");

document.addEventListener("scroll", function(){
    if(window.scrollY > navbarHeight) {
        arrowUpBtn.classList.add("visible");
    } else {
        arrowUpBtn.classList.remove("visible");
    }
});

// project
const projectBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

projectBtnContainer.addEventListener("click", function(e){
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }

    // Cycle effects with selected buttons

    const active = document.querySelector(".categories__btn.selected");
    active.classList.remove("selected");
    const target = e.target.nodeName === "BUTTON" ? e.target :e.target.parentNode;
    target.classList.add("selected");

    projectContainer.classList.add("anim-out");

    let project;
    setTimeout(function(){
    for(let i = 0; i < projects.length; i++){
        project = projects [i];
        if(filter === "*" || filter === project.dataset.type){
            project.classList.remove("invisible");
        } else {
            project.classList.add("invisible");
        }
    }
        projectContainer.classList.remove("anim-out");
    },300);
});


arrowUpBtn.addEventListener("click",function(){
    const scrollTo = document.querySelector("#home");
    scrollTo.scrollIntoView({behavior:"smooth"});
});

// Navbar menus tapping to moving
const menuTap = document.querySelector(".navbar__menu");

menuTap.addEventListener("click", function(event){
    const target = event.target;
    const link = target.dataset.link;
    
    if(link == null){
        return
    }
    menuTap.classList.add("open");
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:"smooth"});
});

//Navbar toggle button for small screen

const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", function(){
    menuTap.classList.toggle("open");
});


//Contact me tapping to moving
const homeContactBtm = document.querySelector(".home__contact");

homeContactBtm.addEventListener("click", function(){
    const scrollTo = document.querySelector("#contact");
    scrollTo.scrollIntoView({behavior:"smooth"});
});

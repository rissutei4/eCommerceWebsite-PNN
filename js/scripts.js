$(document).ready(function () {
    $('.mainEventsSlider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        smartSpeed: 3000,
        animateIn: 'ease-in',
        animateOut: 'ease-out',
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.catalogPreviewCarousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],
        dots: false,

        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 3
            },
            1440: {
                items: 4
            }
        }
    });
    $('.commentatorReviews').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],
        dots: false,

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 2
            },
            1440: {
                items: 3
            }
        }
    });
});


//search form
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
}

//Hamburger Menu
const hamburger = document.querySelector(".hambBtn");
const navMenu = document.querySelector(".navMainInfo");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

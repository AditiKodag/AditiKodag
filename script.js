$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Frontend Developer", "Web Designer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Frontend Developer", "Web Designer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

/*==================== SERVICES MODAL ====================*/
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;


    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1800,
});

ScrollReveal().reveal('.home .max-width, .home-content, .text2', { origin: 'left' });
ScrollReveal().reveal('.home  .max-width, .home-content, .text1', { origin: 'top' });
ScrollReveal().reveal('.home .text-3', { origin: 'bottom' });
ScrollReveal().reveal('.home .text-4', { origin: 'left' });
//-------------------- 
ScrollReveal().reveal(' .about .max-width, .container .row .title', { origin: 'top' });
ScrollReveal().reveal('..about .about-content, .column left', { origin: 'left' });
ScrollReveal().reveal('.about .column right', { origin: 'right' });
ScrollReveal().reveal('.about .text', { origin: 'bottom' });
ScrollReveal().reveal(' .about .text, .p', { origin: 'top' });
ScrollReveal().reveal('..about .text, .a', { origin: 'left' });

// ------------------------
ScrollReveal().reveal('.services, .max-width, .title', { origin: 'top' });
ScrollReveal().reveal('.services .content, .services-list .services-container, .services-card', { origin: 'bottom' });
// -------------------------
ScrollReveal().reveal(' .skills, .max-width, .title', { origin: 'top' });
ScrollReveal().reveal('.skills,.content, .education', { origin: 'bottom' });
// ------------------------
ScrollReveal().reveal(' .teams, .max-width, .title', { origin: 'left' });
// ------------------------
ScrollReveal().reveal('.contact, .max-width, .title', { origin: 'top' });
ScrollReveal().reveal('.contact, .contact-content, .column left', { origin: 'left' });
ScrollReveal().reveal('.contact, .title .icons .rows', { origin: 'right' });
ScrollReveal().reveal('.contact, .column right', { origin: 'bottom' });
// ScrollReveal().reveal('.contact, .text, .field name', {  origin: 'top' });
// ScrollReveal().reveal('.contact, .text, .field email', { origin: 'left' });
// ScrollReveal().reveal('.contact, .text, .field textarea', { origin: 'right' });
// ScrollReveal().reveal('.contact, .text, .button-area', { origin: 'bottom' });

// ----------------------
ScrollReveal().reveal('.footer', { origin: 'left' });




// email js ///////////////////////////////////////
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // ServiceID - templateID - #form - publicKey
    emailjs.sendForm('service_60kq3ve', 'template_qhaewic', '#contact-form', 'jkGRKL4sA6V2hNCYo')
        .then(() =>{
            // Show send Message
            contactMessage.textContent = 'Message send successfully ✅'
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

            contactForm.reset()

        }, () =>{
            // Show Error Message
            contactMessage.textContent = 'Message not send (service error) ❌'
        });
}

contactForm.addEventListener('submit',  sendEmail)
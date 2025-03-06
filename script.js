let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}


var swiper = new swiper(".reviews-slider",{
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    grabCursor:true,
    loop:true,
    spaceBetween:20,
    brakepoints:{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }, 
        991: {
            slidesPerView: 3,
        }, 
    },
 }); 
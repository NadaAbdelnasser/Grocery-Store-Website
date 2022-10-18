let SearchForm = document.querySelector('.search-form');
let SearchIcon = document.querySelector('#search-btn');
SearchIcon.addEventListener('click' , function(){
    SearchForm.classList.toggle('active');
    Shopping.classList.remove('active');
    Login.classList.remove('active');
    Navbar.classList.remove('active');
})


let Shopping = document.querySelector('.shopping-cart');
let CartIcon = document.querySelector('#card-btn');
CartIcon.addEventListener('click' , function(){
    Shopping.classList.toggle('active');
    SearchForm.classList.remove('active');
    Login.classList.remove('active');
    Navbar.classList.remove('active');
})


let Login = document.querySelector('.login-form');
let LoginIcon = document.querySelector('#login-btn');
LoginIcon.addEventListener('click' , function(){
    Login.classList.toggle('active');
    SearchForm.classList.remove('active');
    Shopping.classList.remove('active');
    Navbar.classList.remove('active');
})

let Navbar = document.querySelector('.navbar');
let MenuIcon = document.querySelector('#menu-btn');
MenuIcon.addEventListener('click' , function(){
    Navbar.classList.toggle('active');
    SearchForm.classList.remove('active');
    Shopping.classList.remove('active');
    Login.classList.remove('active');
})


window.onscroll = () =>{
    SearchForm.classList.remove('active');
    Shopping.classList.remove('active');
    Login.classList.remove('active');
    Navbar.classList.remove('active');

}










var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});



var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});
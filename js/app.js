var navBtn = document.querySelector(".header-box__btn");
var navBg = document.querySelector(".header-box-nav");
var navClose = document.querySelector(".header-box__nav-xbtn");

navBtn.addEventListener('click',function(){
    navBg.classList.add('nav-active'); 
});
navClose.addEventListener('click',function(){
    navBg.classList.remove('nav-active'); 
});


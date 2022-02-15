const menu = document.querySelector(".header__list")
const menuButton =document.querySelector(".menu__button")
const overlay = document.querySelector("#overlay")

menuButton.addEventListener('click',()=>{
    menu.classList.toggle("header__listopen");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener('click', ()=>{
    menu.classList.toggle("header__listopen");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});
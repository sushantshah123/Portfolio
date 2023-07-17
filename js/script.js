let burger = document.getElementById('burger');
let nav = document.getElementById('nav');

burger.addEventListener("click",()=>{
    nav.classList.toggle("active");
    burger.classList.toggle("fa-xmark");

    window.onscroll = () => {
        nav.classList.remove("active");
        burger.classList.remove("fa-xmark");
    }
});

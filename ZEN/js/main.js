const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-btn_active');
    menuNav.classList.toggle('menu-nav_active');
})
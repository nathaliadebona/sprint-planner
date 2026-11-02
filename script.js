const menuBtn = document.querySelector('.btn-menu');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    const abriu = menu.classList.toggle('aberto');
    menuBtn.setAttribute('aria-expanded', abriu);
});
const menuBtn = document.querySelector('.btn-menu');
const menuLinks = document.querySelectorAll('#menu a');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    const abriu = menu.classList.toggle('aberto');
    menuBtn.setAttribute('aria-expanded', abriu);
    menuBtn.setAttribute('aria-label', 'Fechar menu');
});

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('aberto');
        menuBtn.setAttribute('aria-expanded', 'false');
    });
});
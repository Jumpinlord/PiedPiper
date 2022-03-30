const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	menuList.classList.toggle('active');
})

menuLinks.forEach(n => n.addEventListener('click', () => {
	hamburger.classList.remove('active');
	menuList.classList.remove('active');
}));

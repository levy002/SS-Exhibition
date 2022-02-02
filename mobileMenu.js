const openMenu = document.querySelector('#hamburger-icon');
const menu = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('#close-icon');
const menuList = document.querySelectorAll('.mobile-nav li');
const list = Array.from(menuList);

function displayMenu() {
  menu.style.display = 'flex';
}

function disappearMenu() {
  menu.style.display = 'none';
}

openMenu.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', disappearMenu);
list.forEach((link) => {
  link.addEventListener('click', disappearMenu);
});
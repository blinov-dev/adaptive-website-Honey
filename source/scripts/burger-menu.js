const navMenu = document.querySelector('.main-nav');
const burgerMenu = document.querySelector('.main-nav__toggle');

burgerMenu.addEventListener('click', () => {
  if(navMenu.classList.contains('main-nav--closed')) {
    navMenu.classList.remove('main-nav--closed');
    navMenu.classList.add('main-nav--opened');
  } else if(navMenu.classList.contains('main-nav--opened')) {
    navMenu.classList.remove('main-nav--opened');
    navMenu.classList.add('main-nav--closed');
  }
});



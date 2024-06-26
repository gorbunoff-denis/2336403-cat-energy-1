let navMain = document.querySelector('.page-header__wrapper');
let navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('page-header__wrapper--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-header__wrapper--closed')) {
    navMain.classList.remove('page-header__wrapper--closed');
    navMain.classList.add('page-header__wrapper--opened');
  } else {
    navMain.classList.add('page-header__wrapper--closed');
    navMain.classList.remove('page-header__wrapper--opened');
  }
});

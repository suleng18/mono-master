// window.addEventListener('load', function () {
//   const toggle = document.querySelector('.menu-toggle');
//   const menu = document.querySelector('.menu');
//   toggle && toggle.addEventListener('click', handleToggleMenu);
//   function handleToggleMenu(e) {
//     menu && menu.classList.add('is-show');
//   }
//   document.addEventListener('click', handleClickOutside);
//   function handleClickOutside(e) {
//     if (e.target.matches('.menu-toggle') || e.target.matches('.menu, .menu *')) return;
//     menu && menu.classList.remove('is-show');
//   }
// });
const menuToggle = document.querySelector('.header-toggle');
const menuHeader = document.querySelector('.header-menu');
const expandClass = 'is-expand';
menuToggle.addEventListener('click', function (e) {
  menuHeader.classList.add(expandClass);
});
document.addEventListener('click', function (e) {
  if (!menuHeader.contains(e.target) && !e.target.matches('.header-toggle')) {
    menuHeader.classList.remove(expandClass);
  }
}); //slick slider

$(document).ready(function () {
  $('.quote-container').slick({
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false
      }
    }]
  });
});
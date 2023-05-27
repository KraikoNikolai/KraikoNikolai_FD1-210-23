

  var tabItem = document.querySelectorAll('.tabs__btn_item');
  var tabContent = document.querySelectorAll('.tabs__content_item');

  tabItem.forEach(function(element) {
    element.addEventListener('click', open);
  })

  function open(evt) {
    var tabTarget = evt.currentTarget;
    var button = tabTarget.dataset.button;

  tabItem.forEach(function(item) {
    item.classList.remove('tabs__btn_item--active');
  })

  tabTarget.classList.add('tabs__btn_item--active');

  tabContent.forEach(function(item){
    item.classList.remove('tabs__content_item--active');
  })

  document.querySelector(`#${button}`).classList.add('tabs__content_item--active');
}

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});

var swiper = new Swiper(".swiper", {
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  
});
$(function(){

$('.products__slider').slick({

  prevArrow: '<button class="slider__btn slider__btn-left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" /></svg></button>',
  nextArrow: '<button class="slider__btn slider__btn-right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" /></svg></button>',
  infinite: false,
});

  $('.questions__item-title').on('click', function () {
    
    // когда мы кликаем на тайтл, будет удаляться класс .questions__item--active
    $('.questions__item').removeClass('questions__item--active');
    // а на который будем кликать, будет добавляться класс .questions__item--active
    $(this).parent().addClass('questions__item--active');
  });


  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    sectionSelector: '.page-section',
    scrollOverflow: true,
    menu: '#header__nav',
    anchors: ['top', 'products', 'benefits', 'specification', 'questions', 'contacts'],
  });

  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-link').on('click', function () {
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');
  });


  
});
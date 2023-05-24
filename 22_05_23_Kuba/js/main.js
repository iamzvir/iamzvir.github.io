$(function () {
  $('.photo__slider').slick({
    // берем все в кавычки, и если внутри того что мы берем тоже есть кавычи, то наружные не должны быть такие как внутренние 
    prevArrow: '<button type="button" class="slick-prev slick__btn"><img src="images/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next slick__btn"><img src="images/arrow-right.svg"></button>',
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list-open')
  })
})
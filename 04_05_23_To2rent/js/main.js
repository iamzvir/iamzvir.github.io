$(function () {
  $(".slider").slick({
    prevArrow:
      '<button type="button" class="slick-prev arrow-prev"><img src="images/prev.svg" alt="arrow-prev"></button>',
    nextArrow:
      '<button type="button" class="slick-next arrow-next"><img src="images/next.svg" alt="next-prev"></button>',
  });

  $('.burger-menu').on('click', function () {
    $('.menu__list').toggleClass('menu__list-active');
  })
});

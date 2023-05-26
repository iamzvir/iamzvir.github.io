$(function () {

  $('[data-fancybox]').fancybox({
    youtube: {
      'controls': 1,
      'showinfo': 1,
    }
  });


  $('.heroes-slider__img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes-slider__content',
    prevArrow: '<button type="button" class="slick-prev slick__btn"><img src="images/arrow-left.png"></button>',
    nextArrow: '<button type="button" class="slick-next slick__btn"><img src="images/arrow-right.png"></button>',

  });
  $('.heroes-slider__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes-slider__img',
    fade: true,
    arrows: false,
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list-open');
  })

})


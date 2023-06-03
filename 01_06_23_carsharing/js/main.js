$(function () {


  $('.offer-top__slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'offer-top__dots',
    fade: true,
  });

  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'reviews__dots',
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]

  });

  $('.burger').on('click', function () {
    $('.menu__list').toggleClass('menu-open');
  })


})
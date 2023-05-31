$(function () {

  $('.blog-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dotsClass: 'blog-slider__dots',
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu-open');
  })

})
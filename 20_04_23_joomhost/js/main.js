$(function () {

  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1105,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.mobile__btn').on('click', function (){
    $('.menu__list').toggleClass('menu__list--open');
  })

})
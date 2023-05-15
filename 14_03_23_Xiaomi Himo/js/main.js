$(function() {
  
  $('.header-slider, .slider__items').slick({
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          
        }
      }
    ]
  });

  $('.burger').on('click', function () {
    $('.menu').toggleClass('menu__list--open');
  })

})
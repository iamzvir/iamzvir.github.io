$(function(){
  $('.design-slider').slick({
    dots: false,
    slideToShow: 4,
    variableWidth: true,
    prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="">',
    nextArrow: '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="">',
    responsive: [
      {
        breakpoint: 481,
        settings: {
          slideToShow: 1,
          arrows: false,
          variableWidth: false,
        }
      }
    ]
  });
});

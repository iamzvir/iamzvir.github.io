$(function () {

  $('.slider__box').slick({
    // здесь мы можем заменить всю строку <button type="button" class="slick-prev">Previous</button> на свою:

    prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow-right.svg" alt="arrow-right">'

  });

});
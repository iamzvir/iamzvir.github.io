$(function () {

  $('.header-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg"></button>',
    dots: true,
    dotsClass: 'header-slider__dots',
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ] 
  });


  // start surf

  $('.surf-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg"></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      }
    ],
    asNavFor: '.surf-slider__map',
    focusOnSelect: true,
    infinite: false,
  });

  $('.surf-slider__map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ],
    infinite: false,
  });

  $('.surf-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if ($(window).width() >= 1024) {
      // Переключение контента внутри .surf-slider__map без прокрутки
      var $mapSlider = $('.surf-slider__map');
      $mapSlider.find('.slick-current').removeClass('slick-current');
      $mapSlider.find('.slick-slide').eq(nextSlide).addClass('slick-current');
    }
  });


  $('.surf-slider__circle').click(function () {
    // Ваш код для обработки клика на кнопке .surf-slider__circle
    // Например, показать или скрыть соответствующий контент
  });

  $('.surf-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.surf-slider__map').slick('slickGoTo', nextSlide, false);
    // Ваш код для обработки переключения слайдов в .surf-slider
    // Например, показать соответствующий контент в .surf-slider__map
    // Здесь можно добавить логику для работы с контентом в .surf-slider__map
  });

  $('.surf-slider__map').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.surf-slider').slick('slickGoTo', nextSlide, false);
    // Ваш код для обработки переключения слайдов в .surf-slider__map
    // Например, показать соответствующий контент в .surf-slider
    // Здесь можно добавить логику для работы с контентом в .surf-slider
  });







  // end surf



  $('.travel-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    asNavFor: '.slider-info__travel',
    fade: true,
  });

  $('.slider-info__travel').slick({
    arrows: false,
    dots: false,
    asNavFor: '.travel-slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true

  });


  $('.sleep-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    asNavFor: '.slider-info__sleep',
    fade: true,
  });

  $('.slider-info__sleep').slick({
    arrows: false,
    dots: false,
    asNavFor: '.sleep-slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true

  });


  $('.shop-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
  });


  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });



  // формула формирования конечной цены
  let sum = $('.nights-input').val() * $('.sum').data('nights') + ($('.guests-input').val() - 1) * $('.sum').data('guests');
  $('.sum').html('$ ' + sum);

  // при клике на плюсик или минус наша формула будет пересчитывать сумму в соответствии с выбранными значениями на сайте, за клик по плсу или минусу отвечает класс .quantity-button
  $('.quantity-button').on('click', function () {
    let sum = $('.nights-input').val() * $('.sum').data('nights') + ($('.guests-input').val() - 1) * $('.sum').data('guests');
    $('.sum').html('$ ' + sum);
  })



  $('.surfboard-box__circle').on('click', function(){
    // при клике именно на "этот"(this) кружок, у него будет меняться класс на "minus"
    $(this).toggleClass('active')
  });


})
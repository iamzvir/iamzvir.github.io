$(function () {

  new WOW().init();


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



  $('.surf-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg"></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    asNavFor: '.surf-slider__map',
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ],
  });



  $('.surf-slider__map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1251,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: true,
        }
      }
    ],
  });


  // отпал этот вариант, после выявления проблемы которую я описал в текстовом доке, но это оставлю для примеров на будущее
  //  $('.surf-slider').on('click', '.slick-prev, .slick-next', function () {
  //   if ($(window).width() > 1024) {
  //     $('.surf-slider__map .slick-track').css('transform', 'none');
  //   }
  // });




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



  $('.surfboard-box__circle').on('click', function () {
    // при клике именно на "этот"(this) кружок, у него будет меняться класс на "minus"
    $(this).toggleClass('active')
  });

  

})
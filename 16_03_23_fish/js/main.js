$(function () {

  $('.header-slider').slick({
    dots: true,

    // не забываем заключать в кавычки, теперь можна заменить на наш, который содержит свои стили (картинки) тоесть ВМЕСТО 1 и 2 будут наши стрелки вырезанные заранее из макета
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
    vertical: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        }
      },
    ]
  });


  $('.product__name').slick({
    slidesToShow: 4, // количество видимых элементов (сколько показывать) иногда нужно подганять под себя
    slidesToScroll: 1, // сколько будет скролить (нам нужно по одному)
    focusOnSelect: true, // выбранный элемент в первом слайдере соответствует элементу во втором слайдере
    asNavFor: '.product__content', // с каким слайдером связать текущий (связываем с .product__content)
    vertical: true, // вертикальный скролл
    centerMode: true, // чтобы выбраный элемент был по центру
    prevArrow: '<button type="button" class="product-prev"><img src="images/prod-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="product-next"><img src="images/prod-next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: false,
          arrows: false,
          slidesToShow: 3,
          dots: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 611,
        settings: {
          vertical: false,
          arrows: false,
          slidesToShow: 2,
          dots: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 381,
        settings: {
          vertical: false,
          arrows: false,
          slidesToShow: 1,
          dots: true,
          centerMode: false,
        }
      },
    ]
  });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name', // связь со слайдером .product__name
    // fade: true,  // тип анимации
    arrows: false,
  });

  $('.menu__btn').on('click', function (){  // при нажатии на кнопку (.menu__btn) я хочу что-бы первый клик добавлял какой то класс к menu__list, а второй клик убирал этот клас ( например - .menu__list--active) делаем это с помощью .toggleClass
    $('.menu__list').toggleClass('menu__list--active'); // точку перед названием класса не ставим так как toggleClass уже на это указывает
  }); 
   
})


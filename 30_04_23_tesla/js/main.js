$(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    dotsClass: 'slider-head__dots',
  });

  // исходя из нашего кода нужно следуюющее - при нажатии на бургер (burger-menu), его свойство top должно принимать значение "0" (так как сейчас оно скрыто с помощью top: -100%;), а затем нажатием на крестик, который у нас close__burger нужно закрывать наше меню, а конкретнее возвращать бургеру (burger-menu) его начальное значение top: -100%; + это все еще нужно как то замедлять с помощь css свойства transition иначе все будет происходить слишком быстро и не красиво.
  // "Клик это событие - а событие это JavaScript, но проще это все расписать на jquery"
  // 1. Событие клик произошло
  // 2. Теперь я хочу чтобы к burger-menu добавлялся класс active
  // 3. Далее идем в css стр. 120
  $('.burger').on('click', function (){
    $('.burger-menu').addClass('active');
  });
  // 4. Теперь нужно по клику на close__burger убирать у burger-menu класс active
  // 5. Для плавности выезда и заезда меню смотри css стр.118
  $('.close__burger').on('click', function (){
    $('.burger-menu').removeClass('active');
  })
})
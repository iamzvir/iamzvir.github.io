$(function () {

  //логика - мы будем кликать на "прдажа, закрепление, ограничения" - а это у нас info-tabs__item, по этому нам их нужно найти. Для того что бы их найти в jquery есть метод - он заключается в написании знака доллар и круглых скобок, в которые нам нужно вписать класс к которому мы хотим обратиться.
  $('.info-tabs__item').on('click', function (e) {
    // если кликабельными у нас получаются ссылки, то им нужно отменить переход на другую страницу, поехали:
    // зададим для этого какоето имя нашей ф-ции, например "e"
    e.preventDefault();
    // далее работаем с подчеркиванием у активной ссылки, нужно убрать у неактивной и назначить активной
    // здесь говорим - у всех с таким классом info-tabs__item, убрать подчеркивание которое имеет класс info-tabs__item--active
    $('.info-tabs__item').removeClass('info-tabs__item--active');
    // но, на ту ссылку на которую я кликнул, класс info-tabs__item--active должен добавиться, для этого используем $(this)
    $(this).addClass('info-tabs__item--active');
    // далее нам нужно чтобы отображался соответствующий блок который будет отвечать за контентную часть(слайдер) при клике по ссылке, для этого нам нужно убрать клас active у всех info-tabs__content
    $('.info-tabs__content').removeClass('info-tabs__content--active');
    // а теперь нужно сделать так чтобы при нажатии на ссылку открывался тот контент который соответствует этой ссылке, для этого мы в html связали их с помощью (id="tab-* у класса info-tabs__content) и (href="#tab-*" у класса info-tabs__item) и теперь мы должны вытащить значение href="#tab-*" у ссылки и подставить этому значению необходимый класс c соответствующим айдишником, вот так: знак долар, круглые скобки, внутри $($(this).attr('href')) - это значит что - "на тот элемент что я нажимаю, вытащит из него attribute href" - и это значит что у меня подставляется то на что я нажал, если нажал на ссылку по имени "ограничения" то у меня подставляется #tab-3 f а это у нас id='tab-3' и вот так мы обратились по айдишнику к нашему блоку с классом  .info-tabs__content с id='tab-3'
    $($(this).attr('href')).addClass('info-tabs__content--active'); // по умолчанию то они отключены все info-tabs__content { display: none; }, а этот класс их включает - info-tabs__content { display: block;}

  
  });



  $('.info-slider, .clients-slider').slick({
    // добавим еще свой класс, хотя там слик уже добавил ("slick-arrow" здесь его не видно, так как это сликовский класс и его добавляет сам плагин, увидеть его можна в браузере при выборе стрелок)
    prevArrow: '<svg class="slick-left" width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM41 3.5L1 3.5V4.5L41 4.5V3.5Z" fill="#303030" /></svg>',
    
    nextArrow: '<svg class="slick-right" width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z" fill="#303030" /></svg>',
  });
  

});
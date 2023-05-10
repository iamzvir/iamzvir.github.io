$(function(){
// табы в третьей секции
  $('.heals-content__tabs-item').on('click' ,function(event) {
    var id = $(this).attr('data-id');
    $('.heals__inner').find('.heals-image__circle').removeClass('active').hide();
    $('.heals-content__tabs').find('.heals-content__tabs-item').removeClass('active');
      $(this).addClass('active');
    $('#' + id).addClass('active-circle').fadeIn();
      return false;
    });

  $('.comment__tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.comment__inner').find('.comment-content__item-box').removeClass('active').hide();
    $('.comment-tabs').find('.comment__tab').removeClass('active');
    $('.comment-content').find('.comment-content__item-box').removeClass('active');
    $('.comment-content').find('.comment-content__item-box').addClass('hidden');
    $(this).addClass('active');
    // используем конкатенацию ('#' + id), которая в результате выдаст id="" и не забываем что id это имя переменной созданной выше в нашей функции...
    $('#' + id).css('display', 'flex');
    $('#' + id).addClass('active');
    $('#' + id).removeClass('hidden');
    return false;
  });
});
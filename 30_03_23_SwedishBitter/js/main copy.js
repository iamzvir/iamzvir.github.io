$(function(){
// табы в третьей секции
  $('.heals-content__tabs-item, .comment__tab').on('click' ,function(event) {
    var id = $(this).attr('data-id');
    $('.heals__inner, .comment__inner').find('.heals-image__circle, .comment-content__item').removeClass('active').hide();
    $('.heals-content__tabs, .comment-tabs').find('.heals-content__tabs-item, .comment__tab').removeClass('active');
      $(this).addClass('active');
    $('#' + id).addClass('active-circle').fadeIn();
      return false;
    });

});
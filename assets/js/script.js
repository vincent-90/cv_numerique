$(function() {
  $('#btnUp').click(function(){
    $('html, body').animate({scrollTop: 0}, 'slow');
  });

  $(window).scroll(function(){
    if ($(window).scrollTop()<50){
      $('#btnUp').fadeOut();
    }else {
      $('#btnUp').fadeIn();
    }
  });
});

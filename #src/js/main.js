$(function(){
  $('.menu-btn').on('click', function() {
    $('.menu').toggleClass('menu--active'); 
  })

  $('.preview-block__imgwrapper').on('click', function() {
    $(this).toggleClass('active');
    $(this).parent().parent().siblings('.preview__content').slideToggle('150');
  });
});
$(function() {
  $('.nav-section a').on('click', function(event) {
    event.preventDefault();
    // $(this).parent().css('background-color', 'black');
    $(this).parents('.container').find('.nav-section-inner').removeClass('open-inner');
    $(this).siblings('.nav-section-inner').toggleClass('open-inner');
  });
});
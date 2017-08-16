$(function() {
  $('.nav-section a').on('click', function(event) {
    event.preventDefault();

    $(this)
      .parents('.container')
      .find('.nav-section-inner')
      .not($(this).siblings())
      .removeClass('open-inner');
    
    $(this)
      .siblings('.nav-section-inner')
      .toggleClass('open-inner');
  });
});
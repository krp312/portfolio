$(function() {
  $('.nav-section a').on('click', function(event) {
    event.preventDefault();
    $(this).siblings('.nav-section-inner').toggleClass('open-inner')
  });
});
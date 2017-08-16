$(function() {
  $('.nav-section a').on('click', function(event) {
    event.preventDefault();
  
    $(this)
      .siblings('.nav-section-inner')
      .toggleClass('open-inner');

    $('.open-inner')  // div.nav-section-inner.open-inner
      .not($(this).siblings()) // don't select contact.nav-section-inner
      .removeClass('open-inner');

    // $(this)
    //   .find('h2')
    //   .toggleClass('plus minus');
  });
});
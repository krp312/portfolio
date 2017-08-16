let activeSection;
$('.nav-section a').on('click', function(event) {
  event.preventDefault();
  activeSection.find('.nav-section-inner').remove('open-inner');
  $(this).sibling('.nav-section-inner').toggleClass('open-inner')
  activeSection = $(this);

  // add minus class, remove plus class
});
// $(function() {
//   $('.nav-section a').on('click', function(event) {
//     event.preventDefault();

//     $(this)
//       .siblings('.nav-section-inner')
//       .toggleClass('open-inner');

//     $('.open-inner')  // div.nav-section-inner.open-inner
//       .not($(this).siblings()) // don't select contact.nav-section-inner
//       .removeClass('open-inner');

//     // $(this)
//     //   .find('h2')
//     //   .toggleClass('plus minus');
//   });
// });

var defaultConfig = {
  headersSelector: '.js-accordion__header',
  panelsSelector: '.js-accordion__panel',
  buttonsSelector: 'button.js-accordion__header',
  buttonsGeneratedContent: 'text', // html
  button: $('', {
    class: 'js-accordion__header',
    type: 'button'
  }),
  buttonSuffixId: '_tab',
  multiselectable: true,
  prefixClass: 'accordion',
  headerSuffixClass: '__title',
  buttonSuffixClass: '__header',
  panelSuffixClass: '__panel',
  direction: 'ltr', // rtl
  accordionPrefixId: 'accordion'
};

$(function() {
  $('.js-accordion').accordion(defaultConfig);
});

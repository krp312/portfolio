$(function() {
    const defaultConfig = {
        headersSelector: '.js-accordion__header',
        panelsSelector: '.js-accordion__panel',
        buttonsSelector: 'button.js-accordion__header',
        buttonsGeneratedContent: 'text', // html
        // button: $('', {
        //   class: 'js-accordion__header',
        //   type: 'button'
        // }),
        buttonSuffixId: '_tab',
        multiselectable: false,
        prefixClass: 'accordion',
        headerSuffixClass: '__title',
        buttonSuffixClass: '__header',
        panelSuffixClass: '__panel',
        direction: 'ltr', // rtl
        accordionPrefixId: 'accordion'
    };

    $('.js-accordion').accordion(defaultConfig);
});

      <script>
        $('.nav-section a').on('click', function(event) {
          event.preventDefault();
          $('.nav-section-inner').remove('open-inner');
          $(this).sibling('.nav-section').addClass('open-inner')
        });
      </script>
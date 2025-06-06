$(document).ready(function () {

  function revealSection(selector) {
    const section = $(selector);
    section.css({ display: 'block', opacity: 0 })
           .animate({ opacity: 1 }, 600, function () {
              document.querySelector(selector).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
           });
  }
  // Event: Click on "Get Started" or "Generate QR"
  $('#getStartedBtn, #generateQR').on('click', function (e) {
    e.preventDefault();
    revealSection('#generate');
  });

  // Event: Form submission
  $('#qrForm').on('submit', function (e) {
    e.preventDefault();

    const name = $('input[name="name"]').val().trim();
    const email = $('input[name="email"]').val().trim();

    $.ajax({
      url: 'php/generate_qr.php',
      type: 'POST',
      data: { name, email },
      success: function (response) {
        $('#qrResult').html(`
          <p>${response.message}</p>
          <img src="assets/qr-placeholder.png" alt="QR Code" width="200" />
        `).hide().fadeIn(600);
      },
      error: function () {
        $('#qrResult').html('<p>Error generating QR. Please try again later.</p>');
      }
    });
  });

});

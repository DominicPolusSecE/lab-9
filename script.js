$(document).ready(function() {
  $('#filters button').click(function() {
    const category = $(this).data('category');
    $('#filters button').removeClass('active');
    $(this).addClass('active');
    $('#gallery img').fadeOut(200);

    setTimeout(() => {
      if (category === 'all') {
        $('#gallery img').fadeIn(200);
      } else {
        $(`#gallery img[data-category="${category}"]`).fadeIn(200);
      }
    }, 200);
  });

  $('#gallery img').click(function() {
    const src = $(this).attr('src');
    $('#lightbox').addClass('visible');
    $('.lightbox-content').attr('src', src).hide().fadeIn(300);
  });

  $('.close, #lightbox').click(function(e) {
    if (e.target !== this) return;
    $('#lightbox').removeClass('visible');
  });
});

$(document).ready(function() {
  FastClick.attach(document.body);

  $('.bl-link').on('click', function() {
    var target = $(this).data('target');
    var panel = $(this).data('target-panel');

    $('#bl-main').removeClass('bl-expand-item');
    $('.bl-expand.bl-expand-top').removeClass('bl-expand bl-expand-top');
    $(target).trigger('click');
    $("[data-panel='" + panel + "']").trigger('click');
  });

  $(".fancybox").fancybox(
    {
      padding : 0
    }
  );

  $(".fancybox-if").fancybox(
    {
      padding : 0
    }
  );

  $(".fancybox-wp")
    .attr('rel', 'gallery_wp')
    .fancybox({
        padding : 0,
        loop: true
  });

  $(".fancybox-goldbek")
    .attr('rel', 'gallery_goldbek')
    .fancybox({
        padding : 0,
        loop: true
  });

  $(".fancybox-konen")
    .attr('rel', 'gallery_konen')
    .fancybox({
        padding : 0,
        loop: true
  });

  $(".fancybox-dlt")
    .attr('rel', 'gallery_dlt')
    .fancybox({
        padding : 0,
        loop: true
  });
});

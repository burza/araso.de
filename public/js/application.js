$(document).ready(function() {
  FastClick.attach(document.body);

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

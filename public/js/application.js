$(document).ready(function() {  
  FastClick.attach(document.body);
  
  $(".fancybox")
    .attr('rel', 'gallery_windows')
    .fancybox({
        padding : 0,
        loop: true
  });
  $(".fancybox-if")
    .attr('rel', 'gallery_if')
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
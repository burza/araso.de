var openPhotoSwipe = function(items) {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var items = items;

    // define options (if needed)
    var options = {
        bgOpacity: 0.85,
        closeEl:true,
        captionEl: false,
        fullscreenEl: false,
        zoomEl: false,
        shareEl: false,
        counterEl: true,
        arrowEl: true,
        preloaderEl: true,
    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

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

  $('.bl-gallery').each( function(index, trigger) {
    $(trigger).on('click', function() {
      var items = [];
      var gallery = $(this).data('gallery');
      $(gallery).children().each( function(index, image) {
        var size = $(image).data('size').split('x');

        items.push(
          {
            src: $(image).data('url'),
            w: parseInt(size[0], 10),
            h: parseInt(size[1], 10)
          }
        );
      });
      openPhotoSwipe(items);
    });
  });

  $('.photoswipe').each(function(index , elem) {
    $(elem).on('click', function() {
      var items = [
        {
          src: $(this).data('url'),
          w: 1622,
          h: 1171
        }
      ];
      openPhotoSwipe(items);
    });
  });
});

(function($){
  $(document).ready(function () {

    // navbar: hide on scroll

    if ($('.c-navbar').length) {
      var previousScroll = 0,
          navbar = $('.c-navbar'),
          navbarOrgOffset = navbar.offset().top;
      $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > navbarOrgOffset) {
          if ((currentScroll > previousScroll) && (currentScroll > 75)) {
            navbar.addClass('c-navbar--fadeout');
          } else {
            navbar.removeClass('c-navbar--fadeout');
          }
        }
        previousScroll = currentScroll;
      });
    }

    // bootstrap: add active class to accordion

    $('.panel-group').on('show.bs.collapse', function (e) {
      $(e.target).parent().addClass('active');
    });
    $('.panel-group').on('hide.bs.collapse', function (e) {
      $(e.target).parent().not($(e.target)).removeClass('active');
    });

  });
})(jQuery);
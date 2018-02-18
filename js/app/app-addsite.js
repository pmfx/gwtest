(function($){
  $(document).ready(function () {

    // add a site: domains add
    
    var tpl_domainEntry = $('#add_site_domains_entry_tpl').html();
    
    $('.js-addsite-add-entry').click(function() {
      
      $('#add_site_domains_list').append(tpl_domainEntry);
      $('#add_site_domains_list .m-add-domains__entry:last-child .form-control').first().focus();
      $('#add_site_domains .panel-footer').show();
      
      $('#add_site_domains_list select').selectric();
      
      // add a site: domains remove
      
      $('.js-addsite-remove-entry').click(function() {
        $(this).closest('.m-add-domains__entry').remove();
      });
      
    });

    // add a site: domains ready

    $('.js-addsite-domains-ready').click(function() {
      $('#add_site_packages').collapse();
      var scroll_offset = $('#add_site_packages').offset().top - 100;
      $('html, body').animate({
        scrollTop: scroll_offset
      }, 750);
    });

    // add a site: package ready

    $('.js-addsite-package-ready').click(function() {
      $('#add_site_authorize').collapse();
      var scroll_offset = $('#add_site_authorize').offset().top - 100;
      $('html, body').animate({
        scrollTop: scroll_offset
      }, 750);
    });

  });
})(jQuery);
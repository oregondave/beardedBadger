(function($) {

    /////////////////////
    // Headroom Plugin //
    /////////////////////

    $.fn.headroom = function(option) {
      return this.each(function() {
        var $this   = $(this),
          data      = $this.data('headroom'),
          options   = typeof option === 'object' && option;

        options = $.extend(true, {}, Headroom.options, options);

        if (!data) {
          data = new Headroom(this, options);
          data.init();
          $this.data('headroom', data);
        }
        if (typeof option === 'string') {
          data[option]();
        }
      });
    };

        ///////////////////////
        // headroom Data API //
        ///////////////////////

        $('[data-headroom]').each(function() {
          var $this = $(this);
          $this.headroom($this.data());
        });

}

(window.Zepto || window.jQuery));



///////////////////////
// jQuery Vegas call //
///////////////////////

$(function() {
  $.vegas({
    src:'assets/img/slider/desktop.jpg'
  });
  // $.vegas('overlay', {
  //   src:'/vegas/overlays/13.png'
  // });
});

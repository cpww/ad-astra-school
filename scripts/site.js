/**
 * A basic JavaScript file that refreshes the Squarespace ImageLoader. For more
 * information about writing custom JavaScript on a Squarespace developer site
 * visit the link below.
 * @see http://developers.squarespace.com/custom-javascript/
 *
 * This script wrapped in a Immediately-Invoked Function Expression (IIFE) to
 * prevent variables from leaking onto the global scope. For more information
 * on IIFE visit the link below.
 * @see http://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 */
(function() {
  'use strict';

  // Stop the script if the user is on an old browser.
  // Browser support: http://caniuse.com/#search=queryselectorall
  if (!document.querySelectorAll) {
    return;
  }

  /**
   * Loads all images on the page using Squarespace's Responsive ImageLoader.
   *
   * @method loadImages
   * @see http://developers.squarespace.com/using-the-imageloader/
   */
  function loadAllImages() {
    var images = document.querySelectorAll('img[data-src]' );

    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i]);
    }
  }

  // The event subscription that reloads images on resize.
  document.addEventListener('resize', loadAllImages);

  var toggleMenu = document.getElementById('toggle-menu');
  var nav = document.getElementById('main-navigation')

  toggleMenu.addEventListener('click', function() {
    toggleMenu.classList.toggle('active');
    nav.classList.toggle('active');
  });


  $(function() {
    var $fixedHeader, DEFAULT_HEADER_POSITION, calculateScroll;

    DEFAULT_HEADER_POSITION = 50;
    $fixedHeader = $('#header');

    calculateScroll = function() {
      if ((window.pageYOffset || document.documentElement.scrollTop) > DEFAULT_HEADER_POSITION) {
        $fixedHeader.addClass('on-scroll');
      } else {
        $fixedHeader.removeClass('on-scroll');
      }
    };
    calculateScroll();
    $(window).scroll(calculateScroll);
  });

  $(function () {
    $('[data="tab-list"]').each(function () {
      var $this = $(this)
      var $tab = $this.find('li.active')
      var $link = $tab.find('a')
      var $panel = $($link.attr('href'))

      $this.on('click', '.tab-control', function (e) {
        e.preventDefault()

        var $link = $(this)
        var id = this.hash

        if (id && !$link.is('.active')) {
          $panel.removeClass('active')
          $tab.removeClass('active')

          $panel = $(id).addClass('active')
          $tab = $link.parent().addClass('active')
        }
      })
    })
  })
}());



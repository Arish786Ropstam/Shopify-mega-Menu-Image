// Hover menu
$(document).ready(function() {
    $('.initial-mega').show();
      $('a.mega-menu__link').hover(
        function() {
          let title = $(this).text().trim().toLowerCase().replace(/ /g, '-');
          let menuClass = 'menu-' + title;
          let escapedMenuClass = escapeClassName(menuClass);
          $('.megamenu-img-inner').hide();
          if ($('.' + escapedMenuClass).length) {
            $('.' + escapedMenuClass).show();
          } else {
            $('.initial-mega').show();
          }

        },
        function() {
         
        }
      );
    });

function escapeClassName(className) {
    return className.replace(/([ #;?%&,.+*~\':"!^$[\]()=>|\/@])/g, '\\$1');
  }


$(document).ready(function() {
    $('.header').on('mouseleave', function() {
        $('.mega-menu').removeAttr('open');
        $('.header__menu-item').attr('aria-expanded', 'false');
    });
});
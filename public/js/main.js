/**
 * Global variables
 */
"use strict";
(function () {

var userAgent = navigator.userAgent.toLowerCase(),
  initialDate = new Date(),

  $document = $(document),
  $window = $(window),
  $html = $("html"),

  isDesktop = $html.hasClass("desktop"),
  isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1]) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
  isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isTouch = "ontouchstart" in window,

  plugins = {
    pointerEvents: isIE < 11 ? "js/pointer-events.min.js" : false,
    smoothScroll: $html.hasClass("use--smoothscroll") ? "js/smoothscroll.min.js" : false,
    bootstrapTabs: $(".tabs"),
    rdParallax: $(".rd-parallax"),
    responsiveTabs: $(".responsive-tabs"),
    rdGoogleMaps: $("#rd-google-map"),
    rdInputLabel: $(".form-label"),
    rdNavbar: $(".rd-navbar"),
    dropdownHover: $(".dropdown-hover"),
    regula: $("[data-constraints]"),
    stepper: $("input[type='number']"),
    radio: $("input[type='radio']"),
    checkbox: $("input[type='checkbox']"),
    owl: $(".owl-carousel"),
    swiper: $(".swiper-slider"),
    photoSwipeGallery: $("[data-photo-swipe-item]"),
    selectFilter: $("select"),
    pageLoader: $(".page-loader"),
    search: $(".rd-search"),
    searchResults: $('.rd-search-results'),
    rdMailForm: $(".rd-mailform"),
    additionalFields: $(".additional-fields"),
    particles: $("#particles-js"),
    hashNav: $(".hash-nav"),
    chosen: $(".chosen"),
    wow: $('.wow')
  };


  //slider-area background setting
    function sliderBgSetting() {
        if ($("#home-banner").length) {
            $(".slides .slider-items").each(function() {
                var $this = $(this);
                var img = $this.find(".slider").attr("src");

                $this.css({
                    backgroundImage: "url("+ img +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
    }
  /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
  $(window).on('load', function() {
    //sliderBgSetting();
  });


  $(document).ready(function () {
    
    /*---------------------
      Mobile menu
    --------------------- */
    if ($('#mobile-menu').length) {
      $('nav#mobile-menu').meanmenu();
    }


  $('[data-toggle="tooltip"]').tooltip()


       $('#home-banner').nivoSlider({
        effect: 'random',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 5000,
        startSlide: 0,
        directionNav: false,
        controlNav:true,
        controlNavThumbs: false,
        pauseOnHover: false,
        manualAdvance: false    

        //         effect: 'random',
        // slices: 15,
        // boxCols: 8,
        // boxRows: 4,
        // animSpeed: 500,
        // pauseTime: 5000,
        // startSlide: 0,
        // directionNav: true,
        // controlNavThumbs: false,
        // pauseOnHover: true,
        // manualAdvance: false  
       });

    /**
     * WOW
     * @description Enables Wow animation plugin
     */
    if ($html.hasClass("wow-animation") && plugins.wow.length && isDesktop) {
      new WOW().init();
    }




 /**
   * RD Parallax
   * @description Enables RD Parallax plugin
   */
  function isScrolledIntoView(elem) {
    var $window = $(window);
    return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
  }

  if (plugins.rdParallax.length) {
    if( !isIE && !isMobile ) {
        $.RDParallax();

        $window.on( 'scroll', function() {
          for ( var i = 0; i < plugins.rdParallax.length; i++ ) {
            var parallax = $( plugins.rdParallax[i] );
            if ( isScrolledIntoView( parallax ) ) {
              parallax.find( '.rd-parallax-inner' ).css( 'position', 'fixed' );
            } else {
              parallax.find( '.rd-parallax-inner' ).css( 'position', 'absolute' );
            }
          }
        });
      } else {
        for( var i = 0; i < plugins.rdParallax.length; i++ ) {
          var parallax = $( plugins.rdParallax[i] ),
            imgPath = parallax.find( '.rd-parallax-layer' + '[data-type=media]' ).first().attr( 'data-url' );
          parallax.addClass( 'rd-parallax-disabled' );
          parallax.css({ 
            'background': 'url(' + imgPath + ') no-repeat center center'
           ,'background-size': 'cover' 

          });
        }
      }

    $("a[href='#']").on("click", function (e) {
      setTimeout(function () {
        $(window).trigger("resize");
      }, 300);
    });
  }





  if (plugins.chosen.length) {
    var config = {
      '.chosen-select'           : {},
      '.chosen-select-no-search' : { disable_search: true, disable_search_threshold: 10 }
    }
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }
  }

  // Sponsors Carousel
  if ($('.history-carousel').length) {
    $('.history-carousel').owlCarousel({
      loop:true,
      margin:0,
      center: true,
      autoWidth: true,
      nav:false,
      dots:false,
      smartSpeed: 500,
      autoplay: true,
      navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
      responsive:{
        0:{
          items:1
        },
        480:{
          items:2
        },
        600:{
          items:3
        },
        768:{
          items:4
        },
        1024:{
          items:4
        }
      }
    });       
  }


  // Sponsors Carousel
  if ($('.notice-board-carousel').length) {
    $('.notice-board-carousel').owlCarousel({
      loop:true,
      items:1,
      margin:0,
      nav:true,
      dots:false,
      //autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 500,      
      navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ]
    });       
  }


  //if($('#gallery').length){
    //windowReszie()
  //}
  

  // if (plugins.dropdownHover.length) {
  //   var hoverMenu = $(plugins.dropdownHover .dropdown);
  //   $('.dropdown').hover(function(){ 
  //     $('.dropdown-toggle', this).trigger('click'); 
  //   });
  // }



  // for equal height:
  function bootstrap_equalizer() {
    $(".equalizer").each(function() {
      var heights = $(this).find(".column").map(function() {
        return $(this).height();
      }).get(),

      maxHeight = Math.max.apply(null, heights);

      $(".column").height(maxHeight);
    });
  }

  if ($(".equalizer").length) {
    if (isDesktop) {
      bootstrap_equalizer();
    }
  }



/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */


});

  if (plugins.particles.length) {
    particlesJS.load('particles-js', '/js/particles.json', function() {
      console.log('callback - particles.js config loaded');
    }); 
  }
})(jQuery);



/* ==========================================================================
 FAQs page
 ========================================================================== */
var BB = BB || {};
BB.Modules = BB.Modules || {};

BB.Modules.faqs = function ($, window, document) {
  "use strict";


  var offset = 311;
  var fixSidebar = 425;
  var stickyEl = $('.sticky-nav-wrap');
  var stickyParentW = stickyEl.parent(".sticky-sidebar").width();

  /**
   * Public methods
   *
   * Public methods are returned/exposed at the bottom of the script.
   */

  function initFaqs() {
    stickyEl.width(stickyParentW);

    $(window).on('resize', function () {
      stickyParentW = stickyEl.parent(".sticky-sidebar").width();
      stickyEl.width(stickyParentW);
    });

    function doSticky() {
      var contentHeight = $('.section-contents').innerHeight();
      var sidebarHeight = $('.sticky-nav-wrap').height();
      var sidebarBottomPos = contentHeight - sidebarHeight;
      var trigger = $(window).scrollTop() - fixSidebar;

      //if (!window.matchMedia("(max-width: 767px)").matches) {
        $('.sticky-nav-wrap').stickybits({ stickyBitStickyOffset: 0});
      //}

      if (trigger >= sidebarBottomPos - 350) {
        stickyEl.css({
          "top": "inherit",
          "bottom": "0",
          "position": "relative",
          "margin": 0
        });
      } else {
        stickyEl.css({
          //"margin-top": -65
        });
      }
    }



    $(window).scroll(function (e) {
      doSticky();
    });

    doSticky();
  }

  /**
   * Expose public methods
   */

  return {
    init: initFaqs
  };
}(jQuery, window, document);

/* ==========================================================================
 Lets do dis.
 ========================================================================== */

$(function () {
  BB.Modules.faqs.init();
});
"use strict";



/* ==========================================================================
 FAQs page
 ========================================================================== */
var BB = BB || {};
BB.Modules = BB.Modules || {};

BB.Modules.home = function ($, window, document) {
  "use strict";

  function initHome() {
    function doSticky() {
      if (!window.matchMedia("(max-width: 767px)").matches) {
        $('.sticky-container').stickybits({ stickyBitStickyOffset: 0});
      }
    }

    $(window).scroll(function (e) {
      doSticky();
    });

    doSticky();
  }

  return {
    init: initHome
  };
}(jQuery, window, document);

/* ==========================================================================
 Lets do dis.
 ========================================================================== */

$(function () {
  BB.Modules.home.init();
});
"use strict";



// $(window).resize(function() {
//   var path = $(this);
//   var contW = path.width();
//   if(contW >= 767){
//     document.getElementsByClassName("sidebar-toggle")[0].style.left="200px";
//   }else{
//     document.getElementsByClassName("sidebar-toggle")[0].style.left="-200px";
//   }
// });

// $(document).ready(function() {
//   $('.dropdown').on('show.bs.dropdown', function(e){
//       $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
//   });
//   $('.dropdown').on('hide.bs.dropdown', function(e){
//     $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
//   });
//   $("#menu-toggle").click(function(e) {
//     e.preventDefault();
//     var left;
//     var elem = document.getElementById("sidebar-toggle-wrapper");
//     left = window.getComputedStyle(elem,null).getPropertyValue("left");
//     if(left == "200px"){
//       document.getElementsByClassName("sidebar-toggle")[0].style.left="-200px";
//     }
//     else if(left == "-200px"){
//       document.getElementsByClassName("sidebar-toggle")[0].style.left="200px";
//     }
//   });
// });
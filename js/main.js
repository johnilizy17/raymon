
/*------------------------------------------------------------------
* Project:        Nirmata
* Author:         CN-InfoTech
* URL:            hthttps://themeforest.net/user/cn-infotech
* Created:        08/30/2018
-------------------------------------------------------------------
 */

"use strict";function flyingPages(){var a=new Set,b=new Set,c=document.createElement("link"),d=c.relList&&c.relList.supports&&c.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,e=navigator.connection&&(navigator.connection.saveData||(navigator.connection.effectiveType||"").includes("2g"));if(!e&&d){var f=function(a){return new Promise(function(b,c){var d=document.createElement("link");d.rel="prefetch",d.href=a,d.onload=b,d.onerror=c,document.head.appendChild(d)})},g=function(a){var b=setTimeout(function(){return p()},5e3);f(a).catch(function(){return p()}).finally(function(){return clearTimeout(b)})},h=function(c){var d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];if(!(b.has(c)||a.has(c))){var e=window.location.origin;if(c.substring(0,e.length)===e&&window.location.href!==c){for(var f=0;f<window.FPConfig.ignoreKeywords.length;f++)if(c.includes(window.FPConfig.ignoreKeywords[f]))return;d?(g(c),b.add(c)):a.add(c)}}},i=new IntersectionObserver(function(a){a.forEach(function(a){if(a.isIntersecting){var b=a.target.href;h(b,!window.FPConfig.maxRPS)}})}),j=function(){return setInterval(function(){Array.from(a).slice(0,window.FPConfig.maxRPS).forEach(function(c){g(c),b.add(c),a.delete(c)})},1e3)},k=null,l=function(a){var c=a.target.closest("a");c&&c.href&&!b.has(c.href)&&(k=setTimeout(function(){h(c.href,!0)},window.FPConfig.hoverDelay))},m=function(a){var c=a.target.closest("a");c&&c.href&&!b.has(c.href)&&h(c.href,!0)},n=function(a){var c=a.target.closest("a");c&&c.href&&!b.has(c.href)&&clearTimeout(k)},o=window.requestIdleCallback||function(a){var b=Date.now();return setTimeout(function(){a({didTimeout:!1,timeRemaining:function c(){var a=Math.max;return a(0,50-(Date.now()-b))}})},1)},p=function(){document.querySelectorAll("a").forEach(function(a){return i.unobserve(a)}),a.clear(),document.removeEventListener("mouseover",l,!0),document.removeEventListener("mouseout",n,!0),document.removeEventListener("touchstart",m,!0)};window.FPConfig=Object.assign({delay:0,ignoreKeywords:[],maxRPS:3,hoverDelay:50},window.FPConfig),j(),o(function(){return setTimeout(function(){return document.querySelectorAll("a").forEach(function(a){return i.observe(a)})},1e3*window.FPConfig.delay)});var q={capture:!0,passive:!0};document.addEventListener("mouseover",l,q),document.addEventListener("mouseout",n,q),document.addEventListener("touchstart",m,q)}}flyingPages();

"use strict";


/*======== Doucument Ready Function =========*/
jQuery(document).ready(function () {

     window.FPConfig = {
      delay: 0,
      ignoreKeywords: [],
      maxRPS: 3,
      hoverDelay: 50
    };

    //CACHE JQUERY OBJECTS
    var $window = $(window);

    $window.on( 'load', function () {
        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({ "overflow": "visible" });

        
        /* Init Wow Js */
        new WOW().init();


        /*========== End Masonry Grid ==========*/

        /* Preloader */
        
        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");

        /* END of Preloader */

    });

    function handlePreloader() {
    if($('.preloader').length){
        $('body').removeClass('active-preloader-ovh');
        $('.preloader').fadeOut();
    }
}

// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        handlePreloader()
    })(jQuery);
});

    /*======= jQuery navbar on scroll =========*/


    $window.on('scroll' , function () {

        if ($(".navbar-default").add(".navbar-inverse").offset().top > 50) {
            $(".reveal-menu-home").addClass("sticky-nav");
            $(".reveal-menu-blog").addClass("sticky-nav-white");
        } else {
            $(".reveal-menu-home").removeClass("sticky-nav");
            $(".reveal-menu-blog").removeClass("sticky-nav-white");
        }
    });


    /*======= Banner Resize with window size =========*/

    $window.on( 'resize', function () {
        var bodyheight = $(this).height();
        $("#mt_banner").height(bodyheight);
    }).resize();

    /*========= Fun and Facts Script ======== */

    try {
        $(".fun-facts_wrapper").appear(function () {
            $(".timer").countTo();
        });
    } catch (err) {

        console.log(err.message);
    }

    // back to top

    $(document).ready(function(){
     $(window).on( 'scroll' , function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').on( 'click' , function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});


    /*======== One Page Scrolling ======= */

    $("#navigation").onePageNav({
        currentClass: "active",
        changeHash: true,
        scrollSpeed: 1000,
        scrollThreshold: 0.5,
        filter: "",
        easing: "swing",
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });


    // accordian

    if ($('.accrodion-grp').length) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function () {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function() {
                $(this).find('.accrodion-title').on('click', function () {
                    if ($(this).parent().hasClass('active') === false ) {                   
                        $('.accrodion-grp.'+accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.'+accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');                    
                        $(this).parent().find('.accrodion-content').slideDown();        
                    };
                    

                });
            });
        });
        
    };

    
    /*======== Contact Form ========*/

    $('#submit-btn').on('click',function (event){
        event.preventDefault();
        $.ajax({
            dataType: 'JSON',
            url: 'sendmail.php',
            type: 'POST',
            data: $('#contact_form').serialize(),
            beforeSend: function (xhr) {
                $('.mt_load').show();
            },
            success: function (response) {
                if (response) {
                    console.log(response);
                    if (response['signal'] == 'ok') {
                        toastr.success(response['msg']);
                        $('#msg').hide();
                        $('input, textarea').val(function () {
                            return this.defaultValue;
                        });
                    }
                    else {
                        $('#msg').show();
                        $('#msg').html('<div class="mt_error">'+ response['msg'] +'</div>');
                    }
                }
            },
            error: function () {
                $('#msg').show();
                $('#msg').html('<div class="mt_error">Errors occur. Please try again later.</div>');
            },
            complete: function () {
                $('.mt_load').hide();
            }
        });
    });
    /*======== End Contact Form ========*/

    // Search in header.
        if( $('.search-icon').length > 0 ) {
            $('.search-icon').on('click', function(e){
              e.preventDefault();
              $('.search-box-wrap').slideToggle();
            });
        }



/*======== Testimonail Slick Slider =========*/

$('.slider-testi').slick({
  infinite: true,
  autoplay: true,
  arrows: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1
});

$('.slider-testi1').slick({
  infinite: true,
  autoplay: true,
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 911,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});

// ekkoLightbox

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox({
                  leftArrow : '❮'
                });
            });


/*======== Team Slick Slider =========*/

$('.slider-team').slick({
  infinite: true,
  autoplay: true,
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
}); 


/*======== Partner Slick Slider =========*/

$('.slider-partner').slick({
  infinite: true,
  loop: true,
  autoplay: true,
  arrows: false,
  dots: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
      {
      breakpoint: 639,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});  


$('.slider-partner1').slick({
  infinite: true,
  loop: true,
  autoplay: true,
  arrows: false,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
      {
      breakpoint: 639,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});  

/*======== Slick Slider =========*/

$('.slider-blog').slick({
  infinite: true,
  autoplay: true,
  arrows: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1
}); 

/*======== Slick Slider =========*/

$('.slider-services').slick({
  infinite: true,
  autoplay: true,
  arrows: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1
}); 


$('.slider-project').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-project',
  dots: false,
  centerMode: true,
  arrows: true,
  focusOnSelect: true
});

/*========Related Project Slick Slider =========*/

$('.slider-relatedproject').slick({
  infinite: true,
  autoplay: true,
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
      {
      breakpoint: 911,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
}); 


$('.slider-store').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-thumbs'
});
$('.slider-thumbs').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-store',
  dots: false,
  centerMode: true,
  arrows: true,
  focusOnSelect: true
});


$('.slider-shop').slick({
  infinite: true,
  autoplay: true,
  arrows: true,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
      {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 735,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});


/*========Services Slick Slider =========*/

$('.slider-services1').slick({
  infinite: true,
  autoplay: true,
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
      {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
}); 

/*========Screen Shop Slick Slider =========*/
$('.slider-screenshop').slick({
  infinite: true,
  autoplay: true,
  arrows: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
}); 



//Progress bar
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },6000);
    });


});

$(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });


/*======== Init Google Map =========*/

function initMap() {

    // Specify features and elements to define styles.
    var styleArray = [
      {
          featureType: "all",
          stylers: [
           { saturation: -80 }
          ]
      }, {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            { hue: "#00ffee" },
            { saturation: 50 }
          ]
      }, {
          featureType: "poi.business",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
      }
    ];

    // Create a map object and specify the DOM element for display.
    var latlng = new google.maps.LatLng(27.7172, 85.3240);// Change a map coordinate here!
    var map = new google.maps.Map(document.getElementById("map"), {
        center: latlng, 
        scrollwheel: false,
        // Apply the map style array to the map.
        styles: styleArray,
        zoom: 13
    });
}

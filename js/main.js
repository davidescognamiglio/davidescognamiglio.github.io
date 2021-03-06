jQuery(document).on('ready', function ($) {
    "use strict";

    /*--------------------------
        SCROLLSPY ACTIVE
    ---------------------------*/
    $('body').scrollspy({
        target: '.bs-example-js-navbar-scrollspy',
        offset: 65
    });


    /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
    $("#mainmenu-area").sticky({
        topSpacing: 0
    });


    /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
    $('ul#nav li a[href^="#"],a.navbar-brand,a.scrolltotop,.app-download-button a').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 40;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });


    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).on("scroll", function () {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $(".scrolltotop");
        if ($totalHeight > 300) {
            $scrollToTop.fadeIn();
        } else {
            $scrollToTop.fadeOut();
        }
        if ($totalHeight + $(window).height() === $(document).height()) {
            $scrollToTop.css("bottom", "90px");
        } else {
            $scrollToTop.css("bottom", "20px");
        }
    });


    /*--------------------------
       HOME PARALLAX BACKGROUND
    ----------------------------*/
    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });


    /*---------------------------
        WELCOME SLIDER
    -----------------------------*/
    $('.welcome-slider-area').owlCarousel({
        merge: true,
        smartSpeed: 2000,
        loop: true,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 10,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $(".welcome-slider-area").on("translated.owl.carousel", function () {
        $(".single-welcome-slide h1").addClass("animate_left_to_right").css("opacity", "1");
        $(".single-welcome-slide h2").addClass("animate_right_to_left").css("opacity", "1");

    });
    $(".welcome-slider-area").on("translate.owl.carousel", function () {
        $(".single-welcome-slide h1").removeClass("animate_left_to_right").css("opacity", "0");
        $(".single-welcome-slide h2").removeClass("animate_right_to_left").css("opacity", "0");

    });


    /*---------------------------
        COUNTER UP TIMER
    -----------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    /*-------------------------------
        GALLERY SLIDER 
    --------------------------------*/
    function getSlide() {
        var wW = $(window).width();
        if (wW < 601) {
            return 1;
        }
        return 3;
    }
    var mySwiper = $('.swiper-container').swiper({

        mode: 'horizontal',
        loop: true,
        speed: 400,
        effect: 'coverflow',
        slidesPerView: getSlide(),
        grabCursor: true,
        nextButton: '.arrow-right',
        prevButton: '.arrow-left',
        keyboardControl: true,
        coverflow: {
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false
        }
    });


    /*---------------------------
        SKILL PROGRESSBAR
    -----------------------------*/
    jQuery('.skillbar').each(function () {
        jQuery(this).appear(function () {
            jQuery(this).find('.count-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 3000);
            var percent = jQuery(this).attr('data-percent');
            jQuery(this).find('.count').html('<span>' + percent + '</span>');
        });
    });


    /*----------------------------
        PRICE TABLE ACTIVE
    -----------------------------*/
    $('.single-price').on('hover', function (e) {
        $('.single-price').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();

    });


    /*------------------------------
        GALLERY IMAGES POPUP
    -------------------------------*/
    $('.single-gallery-items a').magnificPopup({
        type: 'image',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {
                // just a hack that adds mfp-anim class to markup 
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        gallery: {
            enabled: true
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });


    /*---------------------------
        TESTMONIAL SLIDER
    -----------------------------*/
    $('.testmonial-slider').owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: false,
        autoplayTimeout: 2000,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    /*--------------------------
        ACTIVE WOW JS
    ----------------------------*/
    new WOW().init();

}(jQuery));



jQuery(window).on('load', function () {
    "use strict";
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);



});
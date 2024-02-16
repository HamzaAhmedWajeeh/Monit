$(document).ready(function () {
    $(".mobile-nav").click(function () {
        $(".site-nav-menu").toggleClass("mobile-menu");

    });

    $("#l").click(function () {
        document.getElementById("l").style.display = 'none';
        document.getElementById("ic").style.display = 'none';
        document.getElementById("icc").style.display = 'none';
        document.getElementById("vid").style.display = 'none';
    })
    $("#ll").click(function () {
        document.getElementById("l").style.display = 'block';
        document.getElementById("ic").style.display = 'block';
        document.getElementById("icc").style.display = 'block';

        document.getElementById("vid").style.display = 'block';
    })
});


// testimonials

jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});
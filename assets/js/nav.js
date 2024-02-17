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


$(document).ready(function () {
    $(".mainicon").click(function () {
        $(".site-nav-menu").toggleClass("mobile-menu");
  
        $("body").toggleClass("no-scroll");
    });

    $("#l").click(function () {
        document.getElementById("l").style.display = 'none';
        document.getElementById("ic").style.display = 'none';
        document.getElementById("icc").style.display = 'none';
        document.getElementById("vid").style.display = 'none';
        document.getElementById("iconn").style.opacity = 0;
       
    })
    $(".onc").click(function () {
      document.getElementById("l").style.display = 'block';
      document.getElementById("ic").style.display = 'block';
      document.getElementById("icc").style.display = 'block';
      document.getElementById("iconn").style.opacity = 1;
      document.getElementById("vid").style.display = 'block';
     
  })
 

    $("#ll").click(function () {
        document.getElementById("l").style.display = 'block';
        document.getElementById("ic").style.display = 'block';
        document.getElementById("icc").style.display = 'block';
        document.getElementById("iconn").style.opacity = 1;
        document.getElementById("vid").style.display = 'block';
    })
});


// testimonials

$(document).ready(function () {
    let isDragging = false;
    let startX;

    $(".carousel-inner").on("mousedown touchstart", function (event) {
      isDragging = true;
      startX = event.pageX || event.originalEvent.touches[0].pageX;
    });

    $(document).on("mouseup touchend", function (event) {
      if (isDragging) {
        isDragging = false;
        let currentX = event.pageX || event.originalEvent.changedTouches[0].pageX;
        let delta = startX - currentX;

        // Only move the carousel if dragged horizontally
        if (Math.abs(delta) > 10) {
          if (delta > 0) {
            $(".carousel").carousel('next');
          } else if (delta < 0) {
            $(".carousel").carousel('prev');
          }
        }
      }
    });
  });
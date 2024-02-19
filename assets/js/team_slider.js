var swiper = new Swiper(".team-swiper", {
  slidesPerView: 1, // Initial setting
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // 390: {
    //   slidesPerView: 2,
    //   spaceBetween: 20
    // },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4, // Change to 4 to show 4 images
      spaceBetween: 20
    },
    1100: {
      slidesPerView: 5, // Change to 4 to show 4 images
      spaceBetween: 10
    },
  }
});

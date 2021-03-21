$(".owl-carousel").owlCarousel({
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  loop: true,
  margin: 50,
  nav: true,
  dots: true,
  dotsEach: 3,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

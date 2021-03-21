$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  nav: true,
  dots: true,
  dotsEach: 3,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
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

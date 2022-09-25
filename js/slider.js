new Swiper('.swiper', {
  loop: true,
  navigation: {

    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  keyboard: {
    onlyInViewport: true,
    pageUpDown: true,
  },

  slidesPerView: 3,
  spaceBetween: 10,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {

    280: {
      slidesPerView: 1,
    },
    600: {

      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    1200: {
      slidesPerView: 3,
    },
  }
});
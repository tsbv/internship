import { Swiper } from 'swiper';
import { Pagination } from 'swiper/modules';

const initHeroSlider = () => {
  const sliderHeroEl = document.querySelector('.swiper-hero');
  const swiperHero = new Swiper(sliderHeroEl, {
    modules: [Pagination],
    loop: true,
    autoHeight: true,
    allowTouchMove: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1440: {
        allowTouchMove: false,
      }
    },
    on: {
      slideChangeTransitionStart: function () {
        const pagination = this.pagination.el;
        pagination.classList.add('swiper-pagination--hidden');
      },
      slideChangeTransitionEnd: function () {
        const pagination = this.pagination.el;
        pagination.classList.remove('swiper-pagination--hidden');
      },
    },
  });
  swiperHero.update();
};

export { initHeroSlider };

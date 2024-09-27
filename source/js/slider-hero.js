import {Swiper} from 'swiper';
import {Pagination} from 'swiper/modules';

const initHeroSlider = () => {
  const sliderHeroEl = document.querySelector('.swiper-hero');
  const swiperHero = new Swiper(sliderHeroEl, {
    modules: [Pagination],
    loop: true,
    allowTouchMove: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1440: {
        allowTouchMove: false,
      }
    },
  });
  swiperHero.update();
};

export { initHeroSlider };

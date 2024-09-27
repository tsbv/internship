import { Swiper } from 'swiper';
import { Pagination, EffectFade } from 'swiper/modules';

const initHeroSlider = () => {
  const sliderHeroEl = document.querySelector('.swiper-hero');
  const swiperHero = new Swiper(sliderHeroEl, {
    modules: [Pagination, EffectFade],
    loop: true,
    autoHeight: true,
    allowTouchMove: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 300,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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

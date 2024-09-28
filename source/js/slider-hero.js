import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const initHeroSlider = () => {
  const sliderHeroEl = document.querySelector('.swiper-hero');
  const swiperHero = new Swiper(sliderHeroEl, {
    loop: true,
    autoHeight: true,
    allowTouchMove: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className}" type="button" aria-label="Перейти на слайд ${index + 1}">`;
      },
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

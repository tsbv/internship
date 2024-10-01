import { Swiper } from 'swiper';
import { Grid, Pagination } from 'swiper/modules';

const MIN_PAGINATION_BULLETS = 4;
const initNewsSlider = () => {
  const sliderNewsEl = document.querySelector('.swiper-news');
  const swiperNews = new Swiper(sliderNewsEl, {
    modules: [Grid, Pagination],
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,
    allowTouchMove: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        if (index < MIN_PAGINATION_BULLETS) {
          return `<button class="${className}" type="button" aria-label="Перейти на слайд ${index + 1}">${index + 1}</button>`;
        }
        return '';
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
      },
      1440: {
        spaceBetween: 32,
        allowTouchMove: false
      }
    },
  });
  swiperNews.update();
};

export { initNewsSlider };

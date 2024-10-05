import { Swiper } from 'swiper';
import { Grid, Pagination } from 'swiper/modules';

const MIN_PAGINATION_BULLETS = 4;
const initNewsSlider = () => {
  const sliderNewsEl = document.querySelector('.swiper-news');
  const swiperNews = new Swiper(sliderNewsEl, {
    modules: [Grid, Pagination],
    slidesPerView: 'auto',
    slidesPerGroup: 1,
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
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      768: {
        spaceBetween: 30,
        slidesPerGroup: 4,
        slidesPerView: 4,
      },
      1440: {
        spaceBetween: 32,
        slidesPerGroup: 3,
        allowTouchMove: false
      }
    },
  });
  swiperNews.update();
};

export { initNewsSlider };

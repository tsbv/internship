import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const initNewsSlider = () => {
  const sliderNewsEl = document.querySelector('.swiper-news');
  const swiperNews = new Swiper(sliderNewsEl, {
    modules: [Navigation, Pagination],
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className}" type="button" aria-label="Перейти на слайд ${index + 1}">`;
      },
    },
    breakpoints: {
      320: {

      },
      768: {

      },
      1440: {

      }
    },
  });
  swiperNews.update();
};

export { initNewsSlider };

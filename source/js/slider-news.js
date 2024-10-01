import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const initNewsSlider = () => {
  const sliderNewsEl = document.querySelector('.swiper-news');
  const swiperNews = new Swiper(sliderNewsEl, {
    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    spaceBetween: 20,
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
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
      1440: {
        spaceBetween: 32,
        slidesPerView: 3,
      }
    },
  });
  swiperNews.update();
};

export { initNewsSlider };

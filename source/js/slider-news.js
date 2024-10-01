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
        const totalSlides = this.slides.length;
        if (totalSlides <= 4 || index < 4) {
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
      }
    },
  });
  swiperNews.update();
};

export { initNewsSlider };

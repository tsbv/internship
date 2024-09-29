import { Swiper } from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

const initReviewsSlider = () => {
  const sliderReviewsEl = document.querySelector('.swiper-reviews');
  const swiperReviews = new Swiper(sliderReviewsEl, {
    modules: [Navigation, Scrollbar],
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    allowTouchMove: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      1440: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        allowTouchMove: false,
        spaceBetween: 32,
      }
    },
  });
  swiperReviews.update();
};

export { initReviewsSlider };

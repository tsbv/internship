import { Swiper } from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

const initProgramsSlider = () => {
  const sliderProgramsEl = document.querySelector('.swiper-programs');
  const swiperPrograms = new Swiper(sliderProgramsEl, {
    modules: [Navigation, Scrollbar],
    loop: false,
    /* slideToClickedSlide: true, */
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
      hide: true,
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
        slidesPerView: 3,
        slidesPerGroup: 1,
        allowTouchMove: false,
        spaceBetween: 32,
      }
    },
  });
  swiperPrograms.update();
};

export { initProgramsSlider };

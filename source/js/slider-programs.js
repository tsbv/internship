import { Swiper } from 'swiper';
import { Pagination } from 'swiper/modules';

const initProgramsSlider = () => {
  const sliderProgramsEl = document.querySelector('.swiper-programs');
  const swiperPrograms = new Swiper(sliderProgramsEl, {
    modules: [Pagination],
    loop: true,
    autoHeight: true,
    allowTouchMove: true,
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
  swiperPrograms.update();
};

export { initProgramsSlider };

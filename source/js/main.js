// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { toggleBurgerHandler } from './burger-menu';
import { setupSelectHandler } from './select';
import { accordionHandler } from './accordion';
import { navSubmenuHandler } from './submenu';
import { setupTabsHandler } from './tabs';
import { initializeModalHandler } from './modal';
import { numberMaskHandler } from './phone-input';
import { setupFormValidation } from './form-validation';
import { initializeSelectStyles } from './select-styles';
import { initHeroSlider } from './slider-hero';

toggleBurgerHandler(); // Инициализация бургер меню
setupSelectHandler(); // Кастомный селект
accordionHandler(); // Инициализация аккордеонов
navSubmenuHandler (); // Инициализация подменю
setupTabsHandler(); // Инициализация табов
initializeModalHandler(); // Инициализация модального окна
numberMaskHandler(); // Инициализация маски инпута телефона
setupFormValidation(); // Валидация формы
initializeSelectStyles(); // Инициализация стилей состояний селекта
initHeroSlider (); // Инициализация hero слайдера

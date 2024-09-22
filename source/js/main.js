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

toggleBurgerHandler(); // Инициализация бургер меню
setupSelectHandler(); // Кастомный селект
accordionHandler(); // Инициализация аккордеонов
navSubmenuHandler (); // Инициализация подменю
setupTabsHandler(); // Инициализация табов
initializeModalHandler(); // Инициализация модального окна
numberMaskHandler(); // Инициализация маски инпута телефона

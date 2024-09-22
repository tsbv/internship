// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { toggleBurgerHandler } from './burger-menu';
import { setupSelectHandlers } from './select';
import { accordionHandler } from './accordion';
import { navSubmenuHandler } from './submenu';
import { setupTabsHandler } from './tabs';
import { initializeModal } from './modal';

toggleBurgerHandler(); // Инициализация бургер меню
setupSelectHandlers(); // Кастомный селект
accordionHandler(); // Инициализация аккордеонов
navSubmenuHandler (); // Инициализация подменю
setupTabsHandler(); // Инициализация табов
initializeModal(); // Инициализация модального окна

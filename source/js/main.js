// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { toggleBurgerHandler } from './burger-menu';
import { setupSelectHandlers } from './select';
import { accordionHandler } from './accordion';

toggleBurgerHandler(); // Инициализация бургер меню
setupSelectHandlers(); // Кастомный селект
accordionHandler(); // Инициализация аккордеонов

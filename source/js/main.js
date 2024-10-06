import { toggleBurgerHandler } from './burger-menu';
import { setupSelectHandler } from './select';
import { accordionHandler } from './accordion';
import { navSubmenuHandler } from './submenu';
import { setupTabsHandler } from './tabs';
import { initializeModalHandler } from './modal';
import { setupPhoneNumberMask } from './phone-number-mask';
import { setupFormValidation } from './form-validation';
import { setupSelectStylesHandler } from './select-styles';
import { initHeroSlider } from './slider-hero';
import { initProgramsSlider } from './slider-programs';
import { initReviewsSlider } from './slider-reviews';
import { initializeCheckboxValidation } from './checkbox-validation';
import { initNewsSlider } from './slider-news';

toggleBurgerHandler(); // Инициализация бургер меню
setupSelectHandler(); // Кастомный селект
accordionHandler(); // Инициализация аккордеонов
navSubmenuHandler(); // Инициализация подменю
setupTabsHandler(); // Инициализация табов
initializeModalHandler(); // Инициализация модального окна
setupPhoneNumberMask(); // Инициализация маски инпута телефона
setupFormValidation(); // Валидация формы
setupSelectStylesHandler(); // Инициализация стилей состояний селекта
initHeroSlider(); // Инициализация hero слайдера
initProgramsSlider(); // Инициализация programs слайдера
initReviewsSlider(); // Инициализация reviews слайдера
initializeCheckboxValidation(); // Инициализация валидации чекбоксов
initNewsSlider(); // Инициализация news слайдера

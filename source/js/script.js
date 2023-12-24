const mainSliderContainer = document.querySelector('.main__slider');
const mainSliderWrapper = document.querySelector('.main__slider-wrapper');
const mainSliderRBtn = document.querySelector('.main__slider-btn--right');
const mainSliderLBtn = document.querySelector('.main__slider-btn--left');
const mainSliderCounterContainer = document.querySelector('.main__slider-counter');
const mainSliderCountTempl = '<li class="main__slider-count">_X_</li>';

const mainSlider = new Slider(mainSliderContainer, mainSliderWrapper, mainSliderRBtn, mainSliderLBtn, {
  container: mainSliderCounterContainer,
  template: mainSliderCountTempl,
  className: 'main__slider-count--active'
});

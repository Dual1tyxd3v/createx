// Main slider
const mainSliderWrapper = document.querySelector('.main__slider-wrapper');
const mainSliderRBtn = document.querySelector('.main__slider-btn--right');
const mainSliderLBtn = document.querySelector('.main__slider-btn--left');
const mainSliderCounterContainer = document.querySelector('.main__slider-counter');
const mainSliderCountTempl = '<li class="main__slider-count">_X_</li>';

const mainSlider = new Slider({
  slidesGap: 0, sliderWrapper: mainSliderWrapper, slidesPerTime: 1, rightBtn: mainSliderRBtn, leftBtn: mainSliderLBtn, sliderCounter: {
    container: mainSliderCounterContainer,
    template: mainSliderCountTempl,
    className: 'main__slider-count--active'
  },
  needTimer: true
});

// Button volume
const btnVolume = document.querySelector('.video__btn-volume');

btnVolume.addEventListener('click', (e) => e.currentTarget.classList.toggle('video__btn-volume--off'));

// Projects slider
const projectsSliderRBtn = document.querySelector('.projects__slider-btn--right');
const projectsSliderLBtn = document.querySelector('.projects__slider-btn--left');
const projectsSliderWrapper = document.querySelector('.projects__slider-wrapper');

const projectsSlider = new Slider({ slidesGap: 30, sliderWrapper: projectsSliderWrapper, slidesPerTime: 3, rightBtn: projectsSliderRBtn, leftBtn: projectsSliderLBtn, needTimer: true });

// Partners slider
const partnersSliderWrapper = document.querySelector('.partners__slider-wrapper');
const partnersSliderRBtn = document.querySelector('.partners__slider-btn--right');
const partnersSliderLBtn = document.querySelector('.partners__slider-btn--left');

const partnersSlider = new Slider({
  slidesGap: 0,
  slidesPerTime: 1,
  sliderWrapper: partnersSliderWrapper,
  rightBtn: partnersSliderRBtn,
  leftBtn: partnersSliderLBtn,
});

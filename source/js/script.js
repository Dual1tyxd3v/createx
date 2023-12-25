// Main slider
const mainSliderWrapper = document.querySelector('.main__slider-wrapper');
const mainSliderRBtn = document.querySelector('.main__slider-btn--right');
const mainSliderLBtn = document.querySelector('.main__slider-btn--left');
const mainSliderCounterContainer = document.querySelector('.main__slider-counter');
const mainSliderCountTempl = '<li class="main__slider-count">_X_</li>';

const mainSlider = new Slider(0, mainSliderWrapper, 1, mainSliderRBtn, mainSliderLBtn, {
  container: mainSliderCounterContainer,
  template: mainSliderCountTempl,
  className: 'main__slider-count--active'
});

// Button volume
const btnVolume = document.querySelector('.video__btn-volume');

btnVolume.addEventListener('click', (e) => e.currentTarget.classList.toggle('video__btn-volume--off'));

// Projects slider
const projectsSliderRBtn = document.querySelector('.projects__slider-btn--right');
const projectsSliderLBtn = document.querySelector('.projects__slider-btn--left');
const projectsSliderWrapper = document.querySelector('.projects__slider-wrapper');

const projectsSlider = new Slider(30, projectsSliderWrapper, 3, projectsSliderRBtn, projectsSliderLBtn);

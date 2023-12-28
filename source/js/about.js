// Slider
const sliderWrapper = document.querySelector('.history__slider-wrapper');
const sliderRBtn = document.querySelector('.slider-btn--right');
const sliderLBtn = document.querySelector('.slider-btn--left');
const sliderCounterContainer = document.querySelector('.history__left');
const sliderCounterTempl = '<li><a href="#" class="history__tab">_X_</a></li>';
const sliderCounterActiveClass = 'active';
const sliderCounterValues = ['Present', 'March 2019', 'November 2018', 'July 2015', 'August 2010', 'February 2007', 'May 2004', 'October 2001', 'June 2000'];

const slider = new Slider({
  sliderWrapper,
  slidesGap: 0,
  slidesPerTime: 1,
  rightBtn: sliderRBtn,
  leftBtn: sliderLBtn,
  needTimer: true,
  sliderCounter: {
    container: sliderCounterContainer,
    template: sliderCounterTempl,
    className: sliderCounterActiveClass,
    values: sliderCounterValues,
    triggerClass: 'history__tab'
  }
});

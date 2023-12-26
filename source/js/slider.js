const SLIDER_DELAY = 3000;

class Slider {
  constructor({ slidesGap, sliderWrapper, slidesPerTime, rightBtn, leftBtn, sliderCounter, needTimer }) {
    this.currentSlide = 0;
    this.slidesGap = slidesGap;
    this.slideWidth = sliderWrapper.querySelector('.js-slide').clientWidth;
    this.slidesCount = sliderWrapper.querySelectorAll('.js-slide').length - 1;
    this.slidesPetTime = slidesPerTime - 1;
    this.wrapper = sliderWrapper;
    this.wrapper.style.width = `${this.slideWidth * (this.slidesCount + 1) + this.slidesGap * this.slidesCount}px`;
    this.timer = needTimer ? setInterval(() => this._changeSlide(1), SLIDER_DELAY) : null;
    this.sliderCounter = sliderCounter;

    if (rightBtn && leftBtn) {
      rightBtn.addEventListener('click', () => this._changeSlide(1, true));
      leftBtn.addEventListener('click', () => this._changeSlide(-1, true));
    }

    if (sliderCounter) {
      this._createCounter();
    }
  }

  _changeSlide(direction, isManual = false) {
    if (isManual) {
      clearInterval(this.timer);
    }

    this.currentSlide += direction;
    if (this.currentSlide > (this.slidesCount - this.slidesPetTime)) {
      this.currentSlide = 0;
    }
    if (this.currentSlide < 0) {
      this.currentSlide = (this.slidesCount - this.slidesPetTime);
    }

    const offset = (this.currentSlide * this.slideWidth) + (this.slidesGap * this.currentSlide);

    this.wrapper.style.transform = `translateX(-${offset}px)`;

    if (this.sliderCounter) {
      const { container, className } = this.sliderCounter;
      [...container.children].forEach((count, i) => {
        count.classList.remove(className);
        if (i === this.currentSlide) {
          count.classList.add(className);
        }
      });
    }
  }

  _createCounter() {
    const { container, template, className } = this.sliderCounter;

    for (let i = 0; i <= this.slidesCount; i++) {
      container.innerHTML += template.replace('_X_', (i + 1).toString().padStart(2, '0'));
    }
    container.children[0].classList.add(className);
  }
}

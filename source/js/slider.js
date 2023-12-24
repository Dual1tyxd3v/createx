const SLIDER_DELAY = 3000;

class Slider {
  constructor(sliderContainer, sliderWrapper, rightBtn, leftBtn, sliderCounter = null) {
    this.currentSlide = 0;
    this.slideWidth = sliderContainer.clientWidth;
    this.slidesCount = sliderWrapper.querySelectorAll('.js-slide').length - 1;
    this.wrapper = sliderWrapper;
    this.wrapper.style.width = `${this.slideWidth * (this.slidesCount + 1)}px`;
    this.timer = setInterval(() => this._changeSlide(1), SLIDER_DELAY);
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
    if (this.currentSlide > this.slidesCount) {
      this.currentSlide = 0;
    }
    if (this.currentSlide < 0) {
      this.currentSlide = this.slidesCount;
    }

    this.wrapper.style.transform = `translateX(-${this.currentSlide * this.slideWidth}px)`;

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

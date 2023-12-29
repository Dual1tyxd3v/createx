class Tab {
  constructor({ tabsContainer, cards, currentCategory, tabClass, activeClass, fnLimit, paginationContainer }) {
    this.tabsContainer = tabsContainer;
    this.cards = cards;
    this.currentCategory = currentCategory;
    this.activeClass = activeClass;
    this.tabClass = `.${tabClass}`;
    this.fnLimit = fnLimit || null;
    this.filteredCards = this.cards;

    tabsContainer.addEventListener('click', (e) => this._changeTab(e));

    if (paginationContainer) {
      this.paginationContainer = paginationContainer;
      this.paginationContainer.addEventListener('click', (e) => this._pagination(e));
    }
  }

  _changeTab(e) {
    e.preventDefault();
    const tab = e.target.closest(this.tabClass);
    if (!tab) return;

    CURRENT_PAGE = 1;

    tabsContainer.querySelector(`.${this.activeClass}`).classList.remove(this.activeClass);
    tab.classList.add(this.activeClass);

    this.currentCategory = tab.dataset.tab;

    this.filteredCards = [];
    cards.forEach(card => {
      card.style.display = 'none';
      if (card.dataset.tab === this.currentCategory || this.currentCategory === 'all') {
        this.filteredCards.push(card);
        card.style.display = this.fnLimit ? 'none' : 'block';
      }
    });
    this.fnLimit && this.fnLimit(this.filteredCards);
  }

  _pagination(e) {
    e.preventDefault();

    const page = e.target.closest('.n-news__nav').textContent;
    if (!page) return;

    switch (page) {
      case '←': {
        CURRENT_PAGE--;
      }
        break;
      case '→': {
        CURRENT_PAGE++;
      }
        break;
      default: {
        CURRENT_PAGE = +page;
      }
    }
    console.log(CURRENT_PAGE)
    console.log(this.filteredCards.length)
    this.fnLimit(this.filteredCards);
  }
}

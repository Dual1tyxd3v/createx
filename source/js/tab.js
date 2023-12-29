class Tab {
  constructor({ tabsContainer, cards, currentCards, currentCategory, tabClass, activeClass, fnLimit }) {
    this.tabsContainer = tabsContainer;
    this.cards = cards;
    this.currentCards = currentCards;
    this.currentCategory = currentCategory;
    this.activeClass = activeClass;
    this.tabClass = `.${tabClass}`;
    this.fnLimit = fnLimit || null;
    tabsContainer.addEventListener('click', (e) => this._changeTab(e));
  }

  _changeTab(e) {
    e.preventDefault();
    const tab = e.target.closest(this.tabClass);
    if (!tab) return;
    console.log(tab)
    tabsContainer.querySelector(`.${ACTIVE_CLASS}`).classList.remove(ACTIVE_CLASS);
    tab.classList.add(ACTIVE_CLASS);

    this.currentCategory = tab.dataset.tab;

    const filteredCards = [];
    cards.forEach(card => {
      if (card.dataset.tab === this.currentCategory || this.currentCategory === 'all') {
        filteredCards.push(card);
      }
      card.style.display = 'none';
    });
    this.fnLimit && this.fnLimit(filteredCards);
  }
}

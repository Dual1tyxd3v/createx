// Tabs
const tabsContainer = document.querySelector('.w-projects__tabs');
// const tabsContentContainer = document.querySelector('.w-projects__content');
const cards = document.querySelectorAll('.project');
const btnLoadMore = document.querySelector('.w-projects__btn-more');

const ACTIVE_CLASS = 'w-projects__tab--active';
let CURRENT_CARDS = 9;
let CURRENT_CATEGORY = 'all';
const ADDITIONAL_CARDS = 3;

tabsContainer.addEventListener('click', (e) => {
  e.preventDefault();

  const tab = e.target.closest('.w-projects__tab');
  if (!tab) return;

  tabsContainer.querySelector(`.${ACTIVE_CLASS}`).classList.remove(ACTIVE_CLASS);
  tab.classList.add(ACTIVE_CLASS);

  CURRENT_CATEGORY = tab.dataset.tab;

  const filteredCards = [];
  cards.forEach(card => {
    if (card.dataset.tab === CURRENT_CATEGORY || CURRENT_CATEGORY === 'all') {
      filteredCards.push(card);
    }
    card.style.display = 'none';
  })
  limitCards(filteredCards);
});

function limitCards(cards) {
  cards.forEach((card, i) => {
    card.style.display = i < CURRENT_CARDS ? 'block' : 'none';
  })

  btnLoadMore.style.display = cards.length <= CURRENT_CARDS ? 'none' : 'block';
}
limitCards(cards);

btnLoadMore.addEventListener('click', () => {
  const currentCollection = CURRENT_CATEGORY === 'all' ? [...cards] : [...cards].filter(card => card.dataset.tab === CURRENT_CATEGORY);
  
  currentCollection.slice(CURRENT_CARDS, CURRENT_CARDS + ADDITIONAL_CARDS).forEach(card => card.style.display = 'block');
  CURRENT_CARDS += ADDITIONAL_CARDS;
  if (cards.length <= CURRENT_CARDS) btnLoadMore.style.display = 'none';
});

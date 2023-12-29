// Tabs
const tabsContainer = document.querySelector('.w-projects__tabs');
const cards = document.querySelectorAll('.project');
const btnLoadMore = document.querySelector('.w-projects__btn-more');

const ACTIVE_CLASS = 'w-projects__tab--active';
let CURRENT_CARDS = 9;
let CURRENT_CATEGORY = 'all';
const ADDITIONAL_CARDS = 3;

const tab = new Tab({
  tabsContainer, cards,
  currentCards: CURRENT_CARDS,
  currentCategory: CURRENT_CATEGORY,
  tabClass: 'w-projects__tab',
  activeClass: 'w-projects__tab--active',
  fnLimit: limitCards
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

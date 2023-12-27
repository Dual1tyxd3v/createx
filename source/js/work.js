// Tabs
const tabsContainer = document.querySelector('.w-projects__tabs');
// const tabsContentContainer = document.querySelector('.w-projects__content');
const cards = document.querySelectorAll('.project');
const btnLoadMore = document.querySelector('.w-projects__btn-more');

const ACTIVE_CLASS = 'w-projects__tab--active';
let CURRENT_CARDS = 9;
const ADDITIONAL_CARDS = 3;

tabsContainer.addEventListener('click', (e) => {
  e.preventDefault();

  const tab = e.target.closest('.w-projects__tab');
  if (!tab) return;

  tabsContainer.querySelector(`.${ACTIVE_CLASS}`).classList.remove(ACTIVE_CLASS);
  tab.classList.add(ACTIVE_CLASS);

  const anchor = tab.dataset.tab;
  [...cards].slice(0, CURRENT_CARDS).forEach(card => {
    card.style.display = card.dataset.tab === anchor || anchor === 'all' ? 'block' : 'none';
  });
});

function limitCards() {
  [...cards].slice(CURRENT_CARDS).forEach(card => card.style.display = 'none');
  if (cards.length <= CURRENT_CARDS) btnLoadMore.style.display = 'none';
}
limitCards();

btnLoadMore.addEventListener('click', () => {
  [...cards].slice(CURRENT_CARDS, CURRENT_CARDS + ADDITIONAL_CARDS).forEach(card => card.style.display = 'block');
  CURRENT_CARDS += ADDITIONAL_CARDS;
  if (cards.length <= CURRENT_CARDS) btnLoadMore.style.display = 'none';
});

// Tabs
const tabsContainer = document.querySelector('.n-news__tabs');
const cards = document.querySelectorAll('.news__mid');
const navigation = document.querySelector('.n-news__navigation');

const ACTIVE_CLASS = 'n-news__tab--active';

const tab = new Tab({
  tabsContainer, cards,
  currentCategory: 'all',
  tabClass: 'n-news__tab',
  activeClass: ACTIVE_CLASS,
  fnLimit: limitCards,
  paginationContainer: navigation
});

// Cards limit

const template = '<li><a href="#" class="n-news__nav _Y_">_X_</a></li>';
let CURRENT_CARDS = 6;
let CURRENT_PAGE = 1;

function limitCards(cards) {
  if (cards.length > CURRENT_CARDS) {
    renderNavigation(cards.length, CURRENT_CARDS)
  } else {
    navigation.style.display = 'none';
  }
  cards.forEach((card, i) => {
    card.style.display = i >= CURRENT_CARDS * (CURRENT_PAGE - 1) && i < CURRENT_PAGE * CURRENT_CARDS ? 'block' : 'none';
  });
}

function renderNavigation(cardsLength, cardsPerPage) {
  navigation.style.display = 'flex';
  navigation.innerHTML = '';
  console.log('render nav')

  const pages = Math.ceil(cardsLength / cardsPerPage);
  for (let i = 0; i < pages; i++) {
    navigation.innerHTML += template.replace('_X_', i + 1).replace('_Y_', i + 1 === CURRENT_PAGE ? 'n-news__nav--active' : '');
  }

  if (CURRENT_PAGE !== 1) {
    navigation.innerHTML = template.replace('_Y_', 'n-news__nav--arrow').replace('_X_', '&larr;') + navigation.innerHTML;
  }

  if (CURRENT_PAGE !== pages) {
    navigation.innerHTML += template.replace('_Y_', 'n-news__nav--arrow').replace('_X_', '&rarr;');
  }
}

limitCards(cards);

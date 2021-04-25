import menuCards from '../teamplates/menu-cards.hbs';

import menu from '../menu.json';

import '../styles.css';

const itemMenu = document.querySelector('.js-menu');
const cardsMarcup = createsMenuMarkup(menu);

itemMenu.insertAdjacentHTML('beforeend', cardsMarcup)

function createsMenuMarkup(menu) {
    return menuCards(menu);
}
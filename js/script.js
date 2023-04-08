import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import fetchAnimais from './modules/fetch-animais.js';
<<<<<<< HEAD
import fetchBitcoin from './modules/fetch-bitcoin.js';
=======
>>>>>>> master

import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
<<<<<<< HEAD
=======
import initFetchBitcoin from './modules/fetch-bitcoin.js';
>>>>>>> master
import initAnimacaoScroll from './modules/scroll-animacao.js';

// const options = {
//   behavior: 'smooth',
//   block: 'start'
// }
// E teria que passar option no segundo argumento, se quiser determinar por aqui
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();
// modal.toggleModal();
// umas das vantagens de ter o código separado
//  é que posso usar toggle modal fora para abrir o modal assim que iniciar o site

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();
console.log(tooltip);

<<<<<<< HEAD
=======
fetchAnimais('../../animaisapi.json', '.numeros-grid');

>>>>>>> master
initAnimacaoScroll();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
<<<<<<< HEAD

fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
=======
initFetchBitcoin();
>>>>>>> master

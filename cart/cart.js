import { cart } from '../data.js';
import { renderTableRow } from './cart-utils.js';

const table = document.querySelector('table');

for (let i = 0; i < cart.length; i++) {
    const book = cart[i];

    const tr = renderTableRow(book);

    table.appendChild(tr);    
}
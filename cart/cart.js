import { renderTableRow, calculateTotal } from './cart-utils.js';
import { getFromLocalStorage } from '../utils.js';
import { CART } from '../constants.js';

const table = document.querySelector('tbody');
const orderButton = document.querySelector('button');
// replacing the data.js cart with the casrt in local storage
// by default, let's call this an empty array if there's nothing in local storage yet
const cart = getFromLocalStorage(CART) || [];

for (let i = 0; i < cart.length; i++) {
    const book = cart[i];

    if (book.quantity >= 0) {
        const tr = renderTableRow(book);
        table.appendChild(tr);    
    }

}

const total = calculateTotal(cart);
const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;

orderButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);

    // localStorage.removeItem(CART);
    localStorage.clear();
    window.location.href = '/';
});
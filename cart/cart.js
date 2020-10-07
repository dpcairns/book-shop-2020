import { books } from '../data.js';
import { renderTableRow } from './cart-utils.js';
import { findById, getFromLocalStorage } from '../utils.js';

const table = document.querySelector('tbody');

// replacing the data.js cart with the casrt in local storage
// by default, let's call this an empty array if there's nothing in local storage yet
const cart = getFromLocalStorage('CART') || [];

for (let i = 0; i < cart.length; i++) {
    const book = cart[i];

    const tr = renderTableRow(book);

    table.appendChild(tr);    
}

const total = calculateTotal(cart);

const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;

function calculateTotal(cartArray) {
    // initialize an accumulator to 0
    let accumulator = 0;

    // for every item in the cart
    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        // go get the item's true data
        const trueItem = findById(books, item.id);

        // use the true data's price with the cart's quantity to get the subtotal for this item
        const subtotal = trueItem.price * item.quantity;

        // add that subtotal to the accumulator
        accumulator = accumulator + subtotal;
    }

    return accumulator;
}


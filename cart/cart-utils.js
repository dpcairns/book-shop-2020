import { findById, getLocalStorageBooks } from '../utils.js';

/*
    const cartItem = {
        id: 'airplanes',
        quantity: 2
    };
*/


const localStorageBooks = getLocalStorageBooks();


export function renderTableRow(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    // we need the name and the price of the book
    // the name and price of the book live in the localStorageBooks
    // we should use our findById function to get the airplane data from the source of truth

    // findById is going to return { a book object } that we'll call bookData
    const bookData = findById(
        // findById takes an array
        localStorageBooks, 
        // and an id to match against
        cartItem.id
    );

    /* bookData is an object that has: .title, .id, .price, .author */
    const price = bookData.price;
    const title = bookData.title;

    tdPrice.textContent = `$${price}`;
    tdName.textContent = title;

    const total = price * cartItem.quantity;
    
    tdTotal.textContent = `$${total}`;

    tr.append(tdName, tdPrice, tdQuantity, tdTotal);

    return tr;
}

export function calculateTotal(cartArray) {
    // initialize an accumulator to 0
    let accumulator = 0;

    // for every item in the cart
    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        // go get the item's true data
        const trueItem = findById(localStorageBooks, item.id);

        // use the true data's price with the cart's quantity to get the subtotal for this item
        const subtotal = trueItem.price * item.quantity;

        // add that subtotal to the accumulator
        accumulator = accumulator + subtotal;
    }

    return accumulator;
}
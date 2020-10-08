import { getLocalStorageBooks, renderBook } from '../utils.js';

const localStorageBooks = getLocalStorageBooks();

const ul = document.querySelector('#list');

for (let i = 0; i < localStorageBooks.length; i++) {
    const book = localStorageBooks[i];

    const li = renderBook(book);

    ul.appendChild(li);    
}
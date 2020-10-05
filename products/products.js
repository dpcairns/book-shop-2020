import { books } from '../data.js';
import { renderBook } from '../utils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const li = renderBook(book);

    ul.appendChild(li);    
}
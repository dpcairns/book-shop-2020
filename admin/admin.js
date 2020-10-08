const form = document.querySelector('form');
import { PRODUCTS } from '../constants.js';
import { getLocalStorageBooks } from '../utils.js';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const id = data.get('id');
    const title = data.get('title');
    const author = data.get('author');
    const cover = data.get('cover');
    const price = data.get('price');


    const newBook = {
        id: id,
        title: title,
        author: author,
        cover: cover,
        price: Number(price),
    };


    const localStorageBooks = getLocalStorageBooks();

    localStorageBooks.push(newBook);

    const stringyLocalBooks = JSON.stringify(localStorageBooks);
    localStorage.setItem(PRODUCTS, stringyLocalBooks);

});
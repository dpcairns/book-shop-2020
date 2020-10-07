/*
{
        id: 'gardens23',
        title: 'How to Grow Food: A Book About Gardens',
        author: 'Samwise Gamgee',
        cover: 'garden.png',
        price: 4,
        onSale: true,
};
*/

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        // is this item a match with our someId?
        if (item.id === someId) {
            return item;
        }
    }
}

export function renderBook(book) {
    const li = document.createElement('li');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const cover = document.createElement('img');
    const price = document.createElement('p');
    const button = document.createElement('button');

    li.classList.add('book');

    if (book.onSale) {
        li.classList.add('on-sale');
    }

    title.classList.add('title');
    title.textContent = book.title;

    li.appendChild(title);

    author.classList.add('author');
    author.textContent = book.author;

    li.appendChild(author);
    cover.classList.add('cover');

    cover.src = `../assets/${book.cover}`;

    li.appendChild(cover);

    price.classList.add('price');
    price.textContent = `$${book.price.toFixed(2)}`;

    li.appendChild(price);

    button.textContent = 'Add to cart';

    button.addEventListener('click', () => {
        console.log('clicked on: ' + book.id);

        // get or initialize the cart
        const cart = getFromLocalStorage('CART') || [];

        // itemInCart will be either { id: 'apple', quantity: 2}, or undefined 
        const itemInCart = findById(cart, book.id);

        // is this the first apple in the cart?
        if (itemInCart === undefined) {
            // if its not in the cart, this is our first apple
            // so make a new cart item and put it in the array with quantity 1

            const newCartItem = {
                id: book.id,
                quantity: 1, 
            };

            cart.push(newCartItem);
        } else {
            // however, if i already have an apple, just increment the quantity of apples in the cart    
            itemInCart.quantity++;
        }

        setInLocalStorage('CART', cart);
    });
    
    li.appendChild(button);

    return li;
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

// this function will not return anything
export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}
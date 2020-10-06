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

    li.appendChild(button);

    return li;
}

import { renderTableRow } from '../cart/cart-utils.js';

const test = QUnit.test;

test('should take in a cartItem and return a tr element with the appropriate contents', (expect) => {
    const cartItem = {
        id: 'airplanes',
        quantity: 2
    };

    //Arrange
    // Set up your arguments and expectations
    const expected = '<tr><td>The Big Airplane Book</td><td>$3</td><td>2</td><td>$6</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(cartItem);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('addProduct should take in a product object and add it to local storage (returning nothing)', (expect) => {
    const newBook = {
        title: 'airplanes',
        price: 2
    };
    const expectation = [
        {
            id: 'airplanes',
            title: 'The Big Airplane Book',
            author: 'Mason J Planewright',
            cover: 'airplanes.png',
            price: 3,
            onSale: false,
        },
        {
            id: 'gardens',
            title: 'How to Grow Food: A Book About Gardens',
            author: 'Samwise Gamgee',
            cover: 'garden.png',
            price: 4,
            onSale: true,
        },
        {
            id: 'collectibles',
            title: 'Collectible Collectibles: A Guide for Collectors and Those who Love Them',
            author: 'Professor Obtanium',
            cover: 'collectibles.png',
            price: 2,
            onSale: false,
        }, {
            title: 'airplanes',
            price: 2
        },
    ];

    //Arrange
    // Set up your arguments and expectations    //Act 
    // Call the function you're testing and set the result to a const
    addProduct(newBook);

    const localStorageAfter = JSON.parse(localStorage.getItem('books'));
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expectation, localStorageAfter);
});


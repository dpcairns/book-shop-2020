// IMPORT MODULES under test here:
import { renderBook } from '../utils.js';

const test = QUnit.test;

test('should take in a book and return an li with the appropariate contents', (expect) => {
    const book = {
        id: 'gardens23',
        title: 'How to Grow Food: A Book About Gardens',
        author: 'Samwise Gamgee',
        cover: 'garden.png',
        price: 4,
        onSale: true,
    };
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="book on-sale"><p class="title">How to Grow Food: A Book About Gardens</p><p class="author">Samwise Gamgee</p><img class="cover" src="../assets/garden.png"><p class="price">$4.00</p><button>Add to cart</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBook(book);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

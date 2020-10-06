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
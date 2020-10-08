# book-shop-2020

Plan for adding new products

1) In order to be 'addable', products cannot live in data.js anymore. We must relocate them to local storage
    - The products page should now go get the products from local storage, and use those instead of the hard coded .js file.
    - However, those products are not in local storage for most users yet!
        - We need to _seed_ our data with some initial products. That is, we need some starter data.
        - getLocalStorageBooks
            - checks local storage for books (on the first visit, there will be no books)
            - if there are no books in localStorage, stringify the hard coded books, and put the hard coded book into local storage
            - return some books
2) We'll add an admin page with a form. The form should have all the same fields as our product.
    - e.preventDefault will stop the 1996 form wierdness
    - On submit, we make a new book from the user input
        - new FormData(formElement) to grab stuff
    - Then, we grab the current books from localStorage
    - Push the new book into our localStorage books
    - Save the updated array of books into localStorage
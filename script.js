class Books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.BookId = this.BookId;
    }
}

const bookArchive = [];
const form  = document.querySelector('.form');
const booksDiv = document.querySelector('.books');




form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.querySelector('.book-title').value;
    const author = document.querySelector('.book-author').value;

    const book = new Books (title, author)
    bookArchive.push(book);
    addNewBook(book)

})


function addNewBook(book) {
    booksDiv.innerHTML = `
    <p class="book-name">${book.title}</p>
    <p class="the-auhtor">${book.author}</p>
    <button class='removeBook' >Remove</button>
    `
}

// const removeButton = document.querySelector('.removeBook');
// console.log(removeButton)

function removeBook() {

}


class Books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        // this.BookId = this.BookId;
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
    const bookUnit = document.createElement('li');
    bookUnit.innerHTML = `
    <p class="book-name">${book.title}</p>
    <p class="the-auhtor">${book.author}</p>
    <button class='removeBook' >Remove</button>
    `
    booksDiv.appendChild(bookUnit)
}


function removeBook(target) {
    if (target.classList.contains('removeBook')) {
        target.parentElement.remove();
    }
}


booksDiv.addEventListener('click', (e) => {
    removeBook(e.target)
})

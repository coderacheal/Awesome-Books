class Books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

const bookArchive = [];
// const bookArchiveLocalStorage = []
const form  = document.querySelector('.form');
const booksDiv = document.querySelector('.books');
const titleInput = document.getElementsByClassName('book-name');
const authorInput = document.getElementsByClassName('the-auhtor');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.querySelector('.book-title').value;
    const author = document.querySelector('.book-author').value;
    const book = new Books (title, author);

    bookArchive.push(book);
    addNewBook(book)
    
    localStorage.setItem('bookInfo', JSON.stringify(bookArchive));
    // bookInfo.push(addbookStorage)
    // displayBooks()

    // const bookInfo = JSON.parse(localStorage.getItem('book'))

})

function displayBooks() {

}

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

// if(bookInfo) {
//     titleInput.value = bookInfo.bookTitle;
//     authorInput.value = bookInfo.bookAuthor;

// }

// bookCollection.push(newBook);
//   localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
//   displayBooks();



// if(bookInfo) {
//     titleInput.value = bookInfo.bookTitle;
//     authorInput.value = bookInfo.bookAuthor;

// }

// title.value = '';
    // author.value = '';
    // form.addEventListener('submit', function (event) {
    //     event.preventDefault();
    
    // const bookTitle = titleInput.value;
    // const bookAuthor = authorInput.value;

    // const bookInfo = {
    //     bookTitle: bookTitle,
    //     bookAuthor: bookAuthor
    // }





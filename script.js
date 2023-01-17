/* eslint-disable max-classes-per-file */
class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const form = document.querySelector('.form');
const booksDiv = document.querySelector('.books');

class CreateNewBook {
  static addNewBook(book) {
    const bookUnit = document.createElement('li');
    bookUnit.innerHTML = `
        <p class="book-name">${book.title}</p>
        <p class="the-auhtor">${book.author}</p>
        <button class='removeBook' id=${Books.id}>Remove</button>
        `;
    booksDiv.appendChild(bookUnit);
    booksDiv.style.border = '3px solid black';
  }

  static removeBookFromPage(target) {
    if (target.classList.contains('removeBook')) {
      target.parentElement.remove();
    }

    if (!booksDiv.firstElementChild) {
      booksDiv.style.border = '3px solid white';
    }
  }

  static loadFromStorage() {
    let books;

    if (localStorage.getItem('bookInfo')) {
      books = JSON.parse(localStorage.getItem('bookInfo'));
    } else {
      books = [];
    }

    return books;
  }

  static displayBooksFromStorage() {
    const books = CreateNewBook.loadFromStorage();

    books.forEach((book) => {
      CreateNewBook.addNewBook(book);
    });
  }

  static removeBookFromStorage(element) {
    const books = CreateNewBook.loadFromStorage();
    const title = element.parentElement.firstElementChild.innerHTML;
    const index = books.findIndex((book) => book.title === title);
    books.splice(index, 1);

    localStorage.setItem('bookInfo', JSON.stringify(books));
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // const books = loadFromStorage();
  const titleInput = document.querySelector('.book-title');
  const authorInput = document.querySelector('.book-author');
  const title = document.querySelector('.book-title').value;
  const author = document.querySelector('.book-author').value;
  const book = new Books(title, author);
  const books = CreateNewBook.loadFromStorage();
  books.push(book);
  CreateNewBook.addNewBook(book);
  CreateNewBook.loadFromStorage();

  localStorage.setItem('bookInfo', JSON.stringify(books));

  titleInput.value = '';
  authorInput.value = '';
});

booksDiv.addEventListener('click', (e) => {
  CreateNewBook.removeBookFromPage(e.target);
  CreateNewBook.removeBookFromStorage(e.target);
});

window.addEventListener('load', CreateNewBook.displayBooksFromStorage);

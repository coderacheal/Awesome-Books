class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const bookArchive = [];
const form = document.querySelector('.form');
const booksDiv = document.querySelector('.books');

function addNewBook(book) {
  const bookUnit = document.createElement('li');
  bookUnit.innerHTML = `
      <p class="book-name">${book.title}</p>
      <p class="the-auhtor">${book.author}</p>
      <button class='removeBook' >Remove</button>
      `;
  booksDiv.appendChild(bookUnit);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.querySelector('.book-title').value;
  const author = document.querySelector('.book-author').value;
  const book = new Books(title, author);

  bookArchive.push(book);
  addNewBook(book);

  localStorage.setItem('bookInfo', JSON.stringify(bookArchive));
});

function removeBook(target) {
  if (target.classList.contains('removeBook')) {
    target.parentElement.remove();
  }
}

booksDiv.addEventListener('click', (e) => {
  removeBook(e.target);
});

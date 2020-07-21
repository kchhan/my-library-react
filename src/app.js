class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Entry {
  addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read}</td>
      <td><a href="#" class="delete">x</a></td>
    `;

    list.appendChild(row);
  }
  
  showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form')
    container.insertBefore(div, form);
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
  
  clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').value = 'Yes';
  }
}

// Local Storage Class
class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'))
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    const books = Store.getBooks();

    books.forEach(function(book, index){
      if(book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBooks() {
    const books = Store.getBooks();
  
    books.forEach(function(book){
      const entry = new Entry;
  
      entry.addBookToList(book);
    });
  }

  
};

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);


// Event Listeners
document.querySelector('#book-form').addEventListener('submit', function(e){
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').value;

  const book = new Book(title, author, pages, read);

  const entry = new Entry();

  if(title === '' || author === '' || pages === '') {
    entry.showAlert('Please fill in all fields', 'error');
  } else {
    entry.addBookToList(book);
    Store.addBook(book);
    entry.showAlert('Book Added!', 'success');
    entry.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.querySelector('#book-list').addEventListener('click', function(e){
  const entry = new Entry();
  entry.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.parentElement.firstElementChild.textContent);
  entry.showAlert('Book Removed!', 'success')

  e.preventDefault();
});
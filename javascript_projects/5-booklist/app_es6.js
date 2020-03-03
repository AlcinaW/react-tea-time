class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        // Create tr element 
        const row = document.createElement('tr');
        // Insert cols 
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">&#10060;</a></td>
        `;
        list.appendChild(row);
    }
    showAlert(message, className) {
        // Create div 
        const div = document.createElement('div');
        // Add classes 
        div.className = `alert ${className}`;
        // Add text 
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.container');
        //Get form 
        const form = document.querySelector('#book-form');
        // Insert all 
        container.insertBefore(div, form);

        // Timeout
        // setTimeout is part of window object 
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    deleteBook(target) {
        if (target.className === 'delete') {
            //DOM traversing 
            target.parentElement.parentElement.remove();
        }
    }
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local storage class
class Store {
    // method to get items from localStorage 
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function (book) {
            const ui = new UI;

            // Add book to UI
            ui.addBookToList(book);
        });
    }
    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM load event 
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event listener for add book
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        // Get form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value

        // Instantiate book
        const book = new Book(title, author, isbn);

        //Instantiate UI object
        const ui = new UI();

        if (title === '' || author === '' || isbn === '') {
            // Error alert
            ui.showAlert('Please fill in all fields', 'error');
        } else {
            // Add book to list 
            ui.addBookToList(book);

            // Add to localStorage
            Store.addBook(book);

            // Show success
            ui.showAlert('Book added!', 'success');

            // After adding book, clear fields
            ui.clearFields();
        }
        e.preventDefault();
    });

// Event listener for delete (using event delegation)
document.getElementById('book-list').addEventListener
    ('click', function (e) {
        // Instantiate UI 
        const ui = new UI();

        // Delete book
        ui.deleteBook(e.target);

        // Remove from localStorage
        //use ISBN number because it will be unique; use previous element sibling and traverse the DOM
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

        // Show message
        ui.showAlert('Book removed.', 'success');

        e.preventDefault();
    });
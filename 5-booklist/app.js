// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
// UI Constructor
function UI() {

}

// Event listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
    console.log('testing');

    e.preventDefault();
})
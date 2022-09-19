// Consts
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submit = document.getElementById("submit");
const table = document.getElementById("library");
const library = [];

//Listeners
submit.addEventListener("click", () => {
    addToLibrary();
});

//Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

//Functions
function addToLibrary() {
    //Adds Book objects to library array
    if (!title.value || !author.value) {
        //style changes
        return;
    }
    let readStatus = read.checked ? "Read" : "Not read";
    let book = new Book(title.value, author.value, pages.value, readStatus);
    if (bookComparator(book)) {
        //div pop up error
        console.log("Book already in library");
    } else {
        library.push(book);
        let row = table.insertRow();
        for (let key in book) {
            row.insertCell().innerText = book[key];
        };
        row.insertCell().innerHTML = `<button onclick="deleteBook(this)">delete</button>`;
    };
};

function bookComparator(book) {
    //Checks if book already in library
    let isIn = false;
    library.forEach(e => {
        if (JSON.stringify(book.title) === JSON.stringify(e.title)) {
            isIn = true;
        };
    });
    return isIn;
};

function deleteBook(e) {
    //Deletes book from array and displayed table
    let title = e.parentElement.parentElement.firstChild.textContent;
    for (let i = 0; i < library.length; i++) {
        if (library[i].title === title) {
            library.splice(i, 1);
        };
    };
    e.parentElement.parentElement.remove();
};
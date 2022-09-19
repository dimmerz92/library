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
    let readStatus = read.checked ? "Read" : "Not read";
    let book = new Book(title.value, author.value, pages.value, readStatus);
    if (bookComparator(book)) {
        console.log("Book already in library");
        return;
    } else {
        library.push(book);
        let row = table.insertRow();
        for (let key in book) {
            row.insertCell().innerText = book[key];
        };
        row.insertCell().innerText = "delete icon"
    };
};

function bookComparator(book) {
    //Checks if book already in library
    let isIn = false;
    library.forEach(e => {
        if (JSON.stringify(book) === JSON.stringify(e)) {
            isIn = true;
        };
    });
    return isIn;
};
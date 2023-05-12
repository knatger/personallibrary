function reduceBooks(books) {
  books.forEach((book) => {
    book.firstElementChild.classList.remove("hidden");
    book.lastElementChild.classList.add("hidden");
  });
}

function growBook(book) {
  book.firstElementChild.classList.add("hidden");
  book.lastElementChild.classList.remove("hidden");
}

function alignBook(bookClicked, fullBookItem, positionFullBook, bookshelf) {
  const positionClickedBook = bookClicked.getBoundingClientRect();
  console.log(fullBookItem);
  console.log(positionFullBook);
  console.log(bookClicked);
  console.log(positionClickedBook);
  const shift = positionFullBook.x - positionClickedBook.x;

  bookshelf.style.transition = "transform 0.5s ease";
  bookshelf.style.transform = "translateX(" + shift + "px)";

  console.log(shift);
}

function getFullBook() {
  const fullBooks = document.querySelectorAll(".bookshelf__item--full");
  let fullBook = "";

  for (let i = 0; i < fullBooks.length; i++) {
    if (fullBooks[i].classList.contains("hidden")) continue;
    fullBook = fullBooks[i];
    break;
  }

  return fullBook;
}

function getFullBookPosition(fullBookItem) {
  return fullBookItem.getBoundingClientRect();
}

const selectBook = () => {
  const bookshelf = document.querySelector(".bookshelf");
  const books = document.querySelectorAll(".bookshelf__item");

  books.forEach((book) => {
    book.addEventListener("click", (event) => {
      const bookClicked = event.target.closest(".bookshelf__item");
      const fullBookItem = getFullBook().closest(".bookshelf__item");
      const positionFullBook = getFullBookPosition(fullBookItem);

      reduceBooks(books);
      growBook(bookClicked);
      alignBook(bookClicked, fullBookItem, positionFullBook, bookshelf);
    });
  });
};

selectBook();

const selectBook = () => {
  const bookshelfWrapper = document.querySelector(".bookshelf__wrapper");
  const books = document.querySelectorAll(".bookshelf__item");

  firstAlignFullBook();

  books.forEach((book) => {
    book.addEventListener("click", (event) => {
      const bookClicked = event.target.closest(".bookshelf__item");
      const fullBookItem = getFullBook().closest(".bookshelf__item");
      const positionFullBook = getFullBookPosition(fullBookItem);

      reduceBooks(books);
      growBook(bookClicked);
      // alignBook(bookClicked, fullBookItem, positionFullBook, bookshelfWrapper);
    });
  });
};

selectBook();

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

function firstAlignFullBook() {
  const bookshelfWrapper = document.querySelector(".bookshelf__wrapper");
  const fullBookItem = getFullBook().closest(".bookshelf__item");
  const positionFullBook = getFullBookPosition(fullBookItem);

  const fullBookItemWidth = fullBookItem.offsetWidth;

  const viewportWidth = document.documentElement.clientWidth;

  const shift =
    viewportWidth / 2 - positionFullBook.x - fullBookItem.offsetWidth / 2;

  bookshelfWrapper.style.transition = "transform 0.5s ease";
  bookshelfWrapper.style.transform = `translateX(${shift}px)`;
}

// function alignBook(
//   bookClicked,
//   fullBookItem,
//   positionFullBook,
//   bookshelfWrapper
// ) {
//   const positionClickedBook = bookClicked.getBoundingClientRect();

//   const viewportWidth = document.documentElement.clientWidth;

//   const shift = positionClickedBook.x - viewportWidth / 2 - 175;

//   bookshelfWrapper.style.transition = "transform 0.5s ease";
//   bookshelfWrapper.style.transform = `translateX(${shift}px)`;
//   console.log(viewportWidth / 2);
//   console.log(positionClickedBook.x);
//   // console.log(fullBookItem.offsetWidth / 2);
//   console.log(shift);
// }

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

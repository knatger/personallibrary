let fullShift = 0;

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
      firstAlignFullBook();
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

  fullShift += viewportWidth / 2 - positionFullBook.x - fullBookItem.offsetWidth / 2;

  bookshelfWrapper.style.transition = "transform 0.5s ease";
  bookshelfWrapper.style.transform = `translateX(${fullShift}px)`;
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

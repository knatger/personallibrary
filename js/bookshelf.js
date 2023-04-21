const selectBook = () => {
  const books = document.querySelectorAll(".bookshelf__item");
  let fullBookItem = document.querySelector(".bookshelf__item--full");

  let fullBook = {
    author: fullBookItem.querySelector(".bookshelf__author--full"),
    title: fullBookItem.querySelector(".bookshelf__title--full"),
    bookmark: fullBookItem.querySelector(".bookshelf__icon"),
  };

  books.forEach((bookItem) => {
    bookItem.addEventListener("click", () => {
      let book = {
        author: bookItem.querySelector(".bookshelf__author"),
        title: bookItem.querySelector(".bookshelf__title"),
        bookmark: bookItem.querySelector(".bookshelf__icon"),
      };

      if (bookItem !== fullBookItem) {
        /* убираем классы у текущей большой книги */
        fullBookItem.classList.remove("bookshelf__item--full");
        fullBook.author.classList.remove("bookshelf__author--full");
        fullBook.author.classList.add("bookshelf__author");
        fullBook.title.classList.remove("bookshelf__title--full");
        fullBook.title.classList.add("bookshelf__title");
        fullBook.bookmark.classList.add("hidden");
        // fullBook.bookmark.style.display = "none";
        // fullBook.bookmark.classList.toggle("bookshelf__icon");

        /* добавляем классы для увеличения выбранной книги */
        bookItem.classList.add("bookshelf__item--full");
        book.author.classList.remove("bookshelf__author");
        book.author.classList.add("bookshelf__author--full");
        book.title.classList.remove("bookshelf__title");
        book.title.classList.add("bookshelf__title--full");
        book.bookmark.classList.remove("hidden");
        book.title.classList.add("bookshelf__title--full");
        
        /* определяем выбранную книгу как увеличенную */
        fullBookItem = bookItem;
        fullBook.author = book.author;
        fullBook.title = book.title;
        fullBook.bookmark = book.bookmark;
        console.log(fullBook);
      }
    });
  });
};

const modalBook = () => {
  let fullBookItem = document.querySelector(".bookshelf__item--full");


}
selectBook();
modalBook();

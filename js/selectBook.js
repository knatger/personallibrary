const selectBook = () => {
  const bookshelfWrapper = document.querySelector(".bookshelf__wrapper");
  const smallBooks = bookshelfWrapper.querySelectorAll(
    ".bookshelf__item--small"
  );
  let fullBook = bookshelfWrapper.querySelector(".bookshelf__item--full");

  let fullBookInfo = {
    author: fullBook.querySelector(".bookshelf__author--full"),
    title: fullBook.querySelector(".bookshelf__title--full"),
    bookmark: fullBook.querySelector(".bookshelf__icon"),
  };

  smallBooks.forEach((smallBook) => {
    smallBook.addEventListener("click", (event) => {
      const smallBookItem = event.target.closest(".bookshelf__item");
      const fullBookItem = fullBook.closest(".bookshelf__item");
      console.log(fullBookItem);
      let smallBookInfo = {
        author: smallBook.querySelector(".bookshelf__author"),
        title: smallBook.querySelector(".bookshelf__title"),
        bookmark: smallBook.querySelector(".bookshelf__icon"),
      };

      fullBookItem.firstElementChild.classList.remove("hidden");
      fullBookItem.lastElementChild.classList.add("hidden");

      smallBookItem.firstElementChild.classList.add("hidden");
      smallBookItem.lastElementChild.classList.remove("hidden");

      let smallWidth = smallBookItem.offsetWidth;
      let fullWidth = fullBookItem.offsetWidth;

      let position = fullBookItem.offsetWidth;
      // console.log(fullBook, position);
      bookshelfWrapper.style.transform = "translate3d(-, 0px, 0px)";

      fullBook = smallBook;

      return fullBook;
    });
  });
};

selectBook();

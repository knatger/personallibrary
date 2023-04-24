let bookshelfElements = [
  {
    author: "Дженни Колган",
    title: "Летний ресторанчик на берегу",
  },
  {
    author: "Джейн Остин",
    title: "Гордость и предубеждение",
  },
  {
    author: "Джейн Остин",
    title: "Эмма",
  },
  {
    author: "Шарлотта Бронте",
    title: "Джейн Эйр",
  },
  {
    author: "Александр Дюма",
    title: "Тайный заговор",
  },
  {
    author: "Мэри Стюарт",
    title: "Последнее волшебство",
  },
  {
    author: "Уильям Теккерей",
    title: "Ярмарка тщеславия",
  },
  {
    author: "Коллин Маккалоу",
    title: "Поющие в терновнике",
  },
  {
    author: "Алексей Сальников",
    title: "Петровы в группе и вокруг него",
  },
  {
    author: "Михаил Булгаков",
    title: "Мастер и Маргарита",
  },
  {
    author: "Николя Барро",
    title: "Кафе маленьких чудес",
  },
  {
    author: "Дженни Колган",
    title: "Летний ресторанчик на берегу",
  },
  {
    author: "Джейн Остин",
    title: "Гордость и предубеждение",
  },
  {
    author: "Джейн Остин",
    title: "Эмма",
  },
  {
    author: "Шарлотта Бронте",
    title: "Джейн Эйр",
  },
  {
    author: "Александр Дюма",
    title: "Тайный заговор",
  },
  {
    author: "Мэри Стюарт",
    title: "Последнее волшебство",
  },
  {
    author: "Уильям Теккерей",
    title: "Ярмарка тщеславия",
  },
  {
    author: "Коллин Маккалоу",
    title: "Поющие в терновнике",
  },
  {
    author: "Алексей Сальников",
    title: "Петровы в группе и вокруг него",
  },
  {
    author: "Михаил Булгаков",
    title: "Мастер и Маргарита",
  },
  {
    author: "Николя Барро",
    title: "Кафе маленьких чудес",
  },
  {
    author: "Дженни Колган",
    title: "Летний ресторанчик на берегу",
  },
  {
    author: "Джейн Остин",
    title: "Гордость и предубеждение",
  },
  {
    author: "Джейн Остин",
    title: "Эмма",
  },
  {
    author: "Шарлотта Бронте",
    title: "Джейн Эйр",
  },
  {
    author: "Александр Дюма",
    title: "Тайный заговор",
  },
  {
    author: "Мэри Стюарт",
    title: "Последнее волшебство",
  },
  {
    author: "Уильям Теккерей",
    title: "Ярмарка тщеславия",
  },
  {
    author: "Коллин Маккалоу",
    title: "Поющие в терновнике",
  },
  {
    author: "Алексей Сальников",
    title: "Петровы в группе и вокруг него",
  },
  {
    author: "Михаил Булгаков",
    title: "Мастер и Маргарита",
  },
  {
    author: "Николя Барро",
    title: "Кафе маленьких чудес",
  },
  {
    author: "Дженни Колган",
    title: "Летний ресторанчик на берегу",
  },
  {
    author: "Джейн Остин",
    title: "Гордость и предубеждение",
  },
  {
    author: "Джейн Остин",
    title: "Эмма",
  },
  {
    author: "Шарлотта Бронте",
    title: "Джейн Эйр",
  },
  {
    author: "Александр Дюма",
    title: "Тайный заговор",
  },
  {
    author: "Мэри Стюарт",
    title: "Последнее волшебство",
  },
  {
    author: "Уильям Теккерей",
    title: "Ярмарка тщеславия",
  },
  {
    author: "Коллин Маккалоу",
    title: "Поющие в терновнике",
  },
  {
    author: "Алексей Сальников",
    title: "Петровы в группе и вокруг него",
  },
  {
    author: "Михаил Булгаков",
    title: "Мастер и Маргарита",
  },
  {
    author: "Николя Барро",
    title: "Кафе маленьких чудес",
  },
];

const getBooks = (arrayOfBooks) => {
  const bookshelf = document.querySelector(".bookshelf");
  let bookshelfItems = "";
  for (let book = 0; book < arrayOfBooks.length; book++) {
    if (book == 0) {
      bookshelfItems += `<button class="bookshelf__item bookshelf__item--full">
        <svg class="bookshelf__icon">
          <use xlink:href="img/icons.svg#bookmark"></use>
        </svg>
        <div class="bookshelf__author--full">${arrayOfBooks[book].author}</div>
        <div class="bookshelf__title--full">${arrayOfBooks[book].title}</div>
      </button>`;
    } else {
      bookshelfItems += `<button class="bookshelf__item">
        <svg class="bookshelf__icon hidden">
          <use xlink:href="img/icons.svg#bookmark"></use>
        </svg>
        <div class="bookshelf__author">${arrayOfBooks[book].author}</div>
        <div class="bookshelf__title">${arrayOfBooks[book].title}</div>
      </button>`;
    }
  }
  bookshelf.innerHTML = bookshelfItems;
};

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
      }
    });
  });
};

const modalBook = () => {
  const fullBookItem = document.querySelector(".bookshelf__item--full");
  const modal = document.querySelector(".modal");
  const btnClose = document.querySelector(".modal__close");
  const modalInner = document.querySelector(".modal__inner");

  fullBookItem.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  btnClose.addEventListener("click", () => {
    modal.style.display = "";
  });

  modal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal__inner");
    if (!modalContent) modal.style.display = "";
  });
};

// getBooks(bookshelfElements);
selectBook();
modalBook();

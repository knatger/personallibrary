const bookshelfElements = [
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
  const bookshelf = document.querySelector(".bookshelf__wrapper");
  let bookshelfItems = "";
  const middle = Math.round(arrayOfBooks.length / 2);

  for (let book = 0; book < arrayOfBooks.length; book++) {
    if (book == middle) {
      bookshelfItems += `
      <button class="bookshelf__item">
          <div class="bookshelf__item--small hidden">
            <div class="bookshelf__author bookshelf__author--small">${arrayOfBooks[book].author}</div>
            <div class="bookshelf__title bookshelf__title--small">${arrayOfBooks[book].title}</div>
          </div>
          <div class="bookshelf__item--full">
            <svg class="bookshelf__icon">
              <use xlink:href="img/icons.svg#bookmark"></use>
            </svg>
            <div class="bookshelf__author bookshelf__author--full">${arrayOfBooks[book].author}</div>
            <div class="bookshelf__title bookshelf__title--full">${arrayOfBooks[book].title}</div>
          </div>
        </button>
        `;
    } else {
      bookshelfItems += `
      <button class="bookshelf__item">
          <div class="bookshelf__item--small">
            <div class="bookshelf__author bookshelf__author--small">${arrayOfBooks[book].author}</div>
            <div class="bookshelf__title bookshelf__title--small">${arrayOfBooks[book].title}</div>
          </div>
          <div class="bookshelf__item--full hidden">
            <svg class="bookshelf__icon">
              <use xlink:href="img/icons.svg#bookmark"></use>
            </svg>
            <div class="bookshelf__author bookshelf__author--full">${arrayOfBooks[book].author}</div>
            <div class="bookshelf__title bookshelf__title--full">${arrayOfBooks[book].title}</div>
          </div>
        </button>
        `;
        
    }
  }
  bookshelf.innerHTML = bookshelfItems;
};

getBooks(bookshelfElements);
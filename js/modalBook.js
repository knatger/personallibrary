const modalBook = () => {
  const fullBooks = document.querySelectorAll(".bookshelf__item--full");
  const modal = document.querySelector(".modal");
  const btnClose = document.querySelector(".modal__close");
  const modalInner = document.querySelector(".modal__inner");

  fullBooks.forEach((fullBook) => {
    fullBook.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  })

  btnClose.addEventListener("click", () => {
    modal.style.display = "";
  });

  modal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal__inner");
    if (!modalContent) modal.style.display = "";
  });
};

modalBook();

function getDataForModal() {

}
const tabItems = document.querySelectorAll(".tab-item");
const tabItemContents = document.querySelectorAll(".tab-content-item");

function selectedItem(e) {
  removeBorder();
  removeShow();
  this.classList.add("tab-border");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((button) => {
    button.classList.remove("tab-border");
  });
}

function removeShow() {
  tabItemContents.forEach((content) => {
    content.classList.remove("show");
  });
}

tabItems.forEach((button) => {
  button.addEventListener("click", selectedItem);
});

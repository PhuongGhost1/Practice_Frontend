const toggleBtn = document.querySelector(".toggle");
const navBar = document.querySelector(".navigation");

function clickedItem(e) {
  navBar.classList.toggle("active");
  toggleBtn.classList.toggle("active");
}

toggleBtn.addEventListener("click", clickedItem);

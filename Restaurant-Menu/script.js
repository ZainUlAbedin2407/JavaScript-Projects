function fullMenu() {
  const allItems = document.querySelectorAll(".card");
  allItems.forEach((item) => {
    item.style.display = "block";
  });
}

function specificMenu(category) {
  let menuItems = document.querySelector("#menu-items")
  const allItems = document.querySelectorAll(".card");
  allItems.forEach((item) => {
    if (item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

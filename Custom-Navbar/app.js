const mobIcon = document.querySelector(".mob-icon");
const mobNavbar = document.querySelector(".mob");

mobIcon.addEventListener("click", () => {
  mobNavbar.classList.toggle("show");
  
  if (mobNavbar.classList.contains("show")) {
    mobIcon.classList.remove("fa-bars");
    mobIcon.classList.add("fa-xmark");
  } else {
    mobIcon.classList.remove("fa-xmark");
    mobIcon.classList.add("fa-bars");
  }
});

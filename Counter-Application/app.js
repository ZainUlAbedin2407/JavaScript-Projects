let count = 0;

document.querySelector(".minus-icon").style.display = "none";

function increment() {
  count++;
  document.querySelector(".number").innerText = count;

  if (count > 0) {
    document.querySelector(".minus-icon").style.display = "inline-block";
  }
}

function decrement() {
  if (count > 0) {
    count--;
    document.querySelector(".number").innerText = count;
  }

  if (count === 0) {
    document.querySelector(".minus-icon").style.display = "none";
  }
}

function refresh() {
  count = 0;
  document.querySelector(".number").innerHTML = count;
  document.querySelector(".minus-icon").style.display = "none";
}

function showInfo() {
  document.getElementById("infoOverlay").classList.add("overlay-active");
}

function closeInfo() {
  document.getElementById("infoOverlay").classList.remove("overlay-active");
}

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}

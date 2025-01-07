const eyeIcons = document.querySelectorAll(".eye-icon");
const passwordFields = document.querySelectorAll(".passwordField");

// Toggle password visibility
eyeIcons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    const passwordField = passwordFields[index];
    if (passwordField.type === "password") {
      passwordField.type = "text";
      icon.classList.add("fa-eye-slash");
      icon.classList.remove("fa-eye");
    } else {
      passwordField.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelectorAll(".alertText").forEach((alert) => alert.remove());

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let isValid = true;

  if (password.length < 8) {
    let passwordCheck = document.querySelector("#passwordCheck");
    let alertText = document.createElement("p");
    alertText.classList.add("alertText");
    alertText.innerText = "Password must be at least 8 characters long";
    passwordCheck.appendChild(alertText);
    isValid = false;
  }

  if (!isValid) return;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "../home/home.html";
  } else {
    let loginError = document.querySelector("#loginError");
    let alertText = document.createElement("p");
    alertText.classList.add("alertText");
    alertText.innerText = "Invalid email or password";
    loginError.appendChild(alertText);
  }
});

const eyeIcons = document.querySelectorAll(".eye-icon");
const passwordFields = document.querySelectorAll(".passwordField");

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

  let userName = document.querySelector("#userName").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirmPassword").value;

  let isValid = true;

  if (password.length < 8) {
    let passwordCheck = document.querySelector("#passwordCheck");
    let alertText = document.createElement("p");
    alertText.classList.add("alertText");
    alertText.innerText = "Password must be at least 8 characters long";
    passwordCheck.appendChild(alertText);
    isValid = false;
  }

  if (password !== confirmPassword) {
    let isPasswordMatch = document.querySelector("#isPasswordMatch");
    let alertMatchText = document.createElement("p");
    alertMatchText.classList.add("alertText");
    alertMatchText.innerText = "Passwords don't match";
    isPasswordMatch.appendChild(alertMatchText);
    isValid = false;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((user) => user.userName === userName)) {
    let isUserExist = document.querySelector("#isUserExist");
    let alertUserText = document.createElement("p");
    alertUserText.classList.add("alertText");
    alertUserText.innerText = "Username already exists";
    isUserExist.appendChild(alertUserText);
    isValid = false;
  }

  if (users.some((user) => user.email === email)) {
    let isEmailExist = document.querySelector("#isEmailExist");
    let alertEmailText = document.createElement("p");
    alertEmailText.classList.add("alertText");
    alertEmailText.innerText = "Email already exists";
    isEmailExist.appendChild(alertEmailText);
    isValid = false;
  }

  if (!isValid) return;

  let newUser = { userName, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  localStorage.setItem("loggedInUser", JSON.stringify(newUser));

  window.location.href = "../home/home.html";
});

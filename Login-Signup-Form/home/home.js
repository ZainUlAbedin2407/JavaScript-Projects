const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

document.querySelector("#username").textContent = loggedInUser.userName;

document.querySelector("#logOutBtn").addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "../login/login.html";

  history.replaceState(null, null, "../login/login.html");
  alert("Logged Out Successfully");
});

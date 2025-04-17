const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "../../pages/dashboard.html";
  });
}

const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "../../pages/dashboard.html";
  });
}
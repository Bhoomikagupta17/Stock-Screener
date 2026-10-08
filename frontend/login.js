function showSignup() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("formTitle").innerText = "Create Stock AI Account";
}

function showLogin() {
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("formTitle").innerText = "Login to Stock AI";
}

function login() {
  window.location.href = "dashboard.html";
}

function signup() {
  alert("Signup successful (demo). Redirecting to dashboard.");
  window.location.href = "dashboard.html";
}

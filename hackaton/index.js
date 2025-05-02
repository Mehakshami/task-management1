const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");

signupBtn.addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5500/signup/index.html";
});

loginBtn.addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5500/login/login.html";
});
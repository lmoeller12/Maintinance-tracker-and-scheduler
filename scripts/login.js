const VALID_USERNAME = "admin";
const VALID_PASSWORD = "admin";

document.getElementById('passwordInput').addEventListener('keydown', e => {
if (e.key === 'Enter') attemptLogin();
});

function attemptLogin() {
const user = document.getElementById('username').value.trim();
const pass = document.getElementById('password').value;
const err = document.getElementById('errorMsg');

if (user === VALID_USERNAME && pass === VALID_PASSWORD) {
window.location.href = new URL("home.html", window.location.href).href;
return false;
} else {
err.classList.add('visible');
document.getElementById('password').value = '';
document.getElementById('password').focus();
}
}
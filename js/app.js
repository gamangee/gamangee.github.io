const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const contents = document.getElementById('contents');
const greeting = contents.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  loginForm.parentElement.classList.add(HIDDEN_CLASSNAME);
  contents.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `WELCOME! ${username}💖`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (!savedUserName) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreeting(savedUserName);
}

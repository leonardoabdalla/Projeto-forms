const buttonLogin = document.querySelector('#loginButton');
const loginEmail = document.querySelector('#email').value;
const loginPassword = document.querySelector('#password').value;

function login() {
  if (loginEmail.innerText === 'tryber@teste.com' && loginPassword.innerText === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
}
buttonLogin.addEventListener('click', login);

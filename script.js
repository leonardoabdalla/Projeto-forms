const buttonLogin = document.querySelector('#loginButton');

function login() {
  const loginEmail = document.querySelector('#email').value;
  const loginPassword = document.querySelector('#password').value;
  if (loginEmail === 'tryber@teste.com' && loginPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
  
}
buttonLogin.addEventListener('click', login);

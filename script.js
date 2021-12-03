const buttonLogin = document.querySelector('#loginButton');
const buttonEnviar = document.querySelector('#submit-btn');
function enviar() {
  const checkBox = document.querySelector('#agreement')
  if(checkBox.checked == false){
    buttonEnviar.setAttribute("disabled", "disabled");
    
  }
}
buttonEnviar.addEventListener("click", enviar);

function login() {
  const loginEmail = document.querySelector('#email').value;
  const loginPassword = document.querySelector('#password').value;
  if (loginEmail === 'tryber@teste.com' && loginPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', login);

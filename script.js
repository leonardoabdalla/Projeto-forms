// Chamando botão login
const buttonLogin = document.querySelector('#loginButton');

// Chamando botão enviar
let buttonEnviar = document.querySelector('#submit-btn');

// Chamando checkBox
const checkBox = document.querySelector('#agreement')

// Iniciando button desativado
// Referência:https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute
buttonEnviar.setAttribute("disabled", true);

// Função de habilitação do checkbox
function enviar() {
  console.log(checkBox.checked);
  if(checkBox.checked == true){
    buttonEnviar.disabled = false;
  }
}
checkBox.addEventListener("click", enviar);

// Função de validação de login e senha-Requisito 3
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

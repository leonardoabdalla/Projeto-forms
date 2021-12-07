// Chamando botão login
const buttonLogin = document.querySelector('#loginButton');

// Chamando botão enviar
const buttonEnviar = document.querySelector('#submit-btn');

// Chamando checkBox
const checkBox = document.querySelector('#agreement');

// Iniciando button desativado
// Referência:https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute
buttonEnviar.setAttribute('disabled', true);

// Função para o contador
function contador() {
  const counter = document.querySelector('#counter');
  const textarea = document.querySelector('#textarea').value.length;
  counter.innerHTML = 500 - textarea;
}
document.addEventListener('keyup', contador);

// Função de habilitação do checkbox
function enviar() {
  if (checkBox.checked === true) {
    buttonEnviar.disabled = false;
  }
}
checkBox.addEventListener('click', enviar);

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

buttonEnviar.addEventListener('click', dadosRemove);

// https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement
function dadosRemove() {
  const name = document.querySelector("#input-name").value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const main = document.querySelector('#main');
  const login = document.querySelector('#evaluation-form').remove();
  const form = document.querySelector('.trybewarts-login').remove();
  const divNova = document.createElement("div");
  const conteudoNovo = document.createTextNode("Nome: " + name + ' ' + lastName);
  divNova.appendChild(conteudoNovo);


  const divAtual = document.getElementById("div1");
  main.insertBefore(divNova, divAtual);
}

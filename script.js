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

function choosen() {
  const selectedSubjects = document.querySelectorAll('.subject:checked');
  const choosenSubjects = [];
  for (let i = 0; i < selectedSubjects.length; i += 1) {
    choosenSubjects.push(selectedSubjects[i].value);
  }
  return choosenSubjects.join(', ');
}

// https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement
// https://www.javatpoint.com/how-to-check-a-radio-button-using-javascript
function dadosRemove(event) {
  event.preventDefault();
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const selectedFamily = document.querySelector('input[name="family"]:checked').value;
  const selectedRate = document.querySelector('input[name="rate"]:checked').value;
  const textArea = document.querySelector('#textarea').value;
  const test = choosen();
  const login = document.querySelector('#evaluation-form').remove();
  const form = document.querySelector('.trybewarts-login').remove(); 
  const divNova = document.createElement('div');
  divNova.innerHTML = `<p>Nome: ${name} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Casa: ${house}</p>
  <p>Famlia: ${selectedFamily}</p>
  <p>Matérias: ${test} </p>
  <p>Avaliação: ${selectedRate}</p>
  <p>Observações: ${textArea}</p>`;
  const divAtual = document.getElementById('div1');
  main.insertBefore(divNova, divAtual);
}

buttonEnviar.addEventListener('click', dadosRemove);

const botaoEmail = document.querySelector('#botao');
const checkbox = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const casa = document.querySelector('#house');
const familia = document.querySelector('#family');
const avaliacao = document.querySelector('rate');
const materia = document.querySelector('materia');

function validarEmail() {
  const formEmail = document.querySelector('#email');
  const formSenha = document.querySelector('#senha');

  if (formEmail.value === 'tryber@teste.com' && formSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoEmail.addEventListener('click', validarEmail);

function validarBtn() {
  const btn = document.querySelector('#submit-btn');
  if (checkbox.checked) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

checkbox.addEventListener('click', validarBtn);

function contarTextArea() {
  const texto = textArea.value;
  const paragrafo = document.querySelector('#counter');
  paragrafo.innerText = `${500 - texto.length} Caracteres restantes`;
}
textArea.addEventListener('keyup', contarTextArea);

const botaoSubmit = document.querySelector('#submit-btn');

function checkboxElemento() {
  const materia = document.querySelectorAll('.materia');
  const materiaCheck = [];
  for (let i = 0; i < materia.length; i += 1) {
    if (materia[i].checked) {
      console.log(materia[i].checked);
      materiaCheck.push(materia[i].value);
    }
  }
  console.log(materiaCheck);
  return materiaCheck;
}

function gerarRelatorio(event) {
  event.preventDefault();
  const botaoEmail = document.querySelector('#botao').value;
  const textArea = document.querySelector('#textarea').value;
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const checkbox = document.querySelector('#agreement').value;
  const familia = document.querySelector('input[name="family"]:checked');
  const avaliacao = document.querySelector('input[name="rate"]:checked');
  const materia = checkboxElemento();
}

botaoSubmit.addEventListener('click', gerarRelatorio);

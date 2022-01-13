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
function gerarRelatorio(event) {
  event.preventDefault();
  const botaoEmail = document.querySelector('#botao').value;
  const textArea = document.querySelector('#textarea').value;
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const checkbox = document.querySelector('#agreement').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const materia = checkbox();
}

function ckeckBox () {
  const materia = document.querySelectorAll('materia');
  let materiaCheck = [];
  for (let i = 0; i < materia.length; i++){
    if (materia[i].checked){
      materiaCheck.push(materia[i].value);
    }
  }
  return materiaCheck;
}

botaoSubmit.addEventListener('click', gerarRelatorio);

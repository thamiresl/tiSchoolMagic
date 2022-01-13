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

function contarTextArea () {
  let texto = textArea.value;
  let paragrafo = document.querySelector("#counter");
  paragrafo.innerText = `${500 - texto.length} Caracteres restantes`;
}
textArea.addEventListener("keyup", contarTextArea);

const botaoSubmit = document.querySelector ("#submit-btn");
function gerarRelatorio (event){
  event.preventDefault()
  
  document.querySelector('#input-name').value = nome.value;
  document.querySelector('#input-lastname').value = sobrenome.value;
  document.querySelector('#agreement').value = checkbox.value;
  document.querySelector('#textarea').value = textArea.value; 
  document.querySelector('#input-email').value =  email.value;
  document.querySelector('#house').value = casa.value;
  document.querySelector('#family').value = familia.value;
  document.querySelector('rate').value = avaliacao.value;
  document.querySelector('materia').value = materia.value;
}
botaoSubmit.addEventListener("click", gerarRelatorio);

 
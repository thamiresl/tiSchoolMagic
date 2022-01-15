const botaoEmail = document.querySelector('#botao');
const checkbox = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const btn = document.querySelector('#submit-btn');

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
window.onload = () => {
  btn.disabled = true;
};

function validarBtn() {
  console.log('aqui');
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

function checkBoxMateria() {
  const materiaRecuperadas = document.querySelectorAll('.materia');
  const materiaCheck = [];
  for (let i = 0; i < materiaRecuperadas.length; i += 1) {
    if (materiaRecuperadas[i].checked) {
      materiaCheck.push(` ${materiaRecuperadas[i].value}`);
    }
  }
  return materiaCheck;
}

function gerarP(form, texto) {
  const p = document.createElement('P');
  p.innerText = texto;
  form.appendChild(p);
}

function gerarRelatorio(event) {
  event.preventDefault();
  const observacoes = document.querySelector('#textarea').value;
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const materias = checkBoxMateria();
  const form = document.querySelector('#evaluation-form');
  form.innerHTML = '';
  gerarP(form, `Nome: ${nome} ${sobrenome}`);
  gerarP(form, `Email: ${email}`);
  gerarP(form, `Casa: ${casa}`);
  gerarP(form, `Família: ${familia}`);
  gerarP(form, `Matérias:${materias}`);
  gerarP(form, `Avaliação: ${avaliacao}`);
  gerarP(form, `Observações: ${observacoes}`);
}
botaoSubmit.addEventListener('click', gerarRelatorio);
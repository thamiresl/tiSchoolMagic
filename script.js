const botaoEmail = document.querySelector('#botao');
const checkbox = document.querySelector('#agreement');

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
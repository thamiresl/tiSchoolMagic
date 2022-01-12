let formEmail= document.querySelector("#email");
let formSenha= document.querySelector("#senha"); 
let botaoEmail= document.querySelector("#botao");


function validarEmail (){
    
    if (formEmail.value === "tryber@teste.com" && formSenha.value === "123456"){
        !alert("Olá, Tryber!");
    } else {
        !alert("Email ou senha inválidos.")
    }
}

botaoEmail.addEventListener("click", validarEmail);

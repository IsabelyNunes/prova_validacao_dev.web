function validarForm() {
    let nome = document.getElementById("inputEmail");
    let email = document.getElementById("inputTelefone");
    let mensagem = document.getElementById("inputMensagem");
    let telefone = document.getElementById("telefone");
    let nascimento = document.getElementById("nascimento");
    let termos = document.getElementById("aceitarTermos");
  
    let emailError = document.getElementById("emailError");
    let foneError = document.getElementById("foneError");
    let messageError = document.getElementById("messageError");
  
    let valid = true;
  
    if (nome.value == "") {
      emailError.innerText = "Preencha o nome.";
      valid = false;
    } else {
      emailError.innerText = "";
    }
  
    if (email.value == "") {
      foneError.innerText = "Preencha o e-mail.";
      valid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
      foneError.innerText = "E-mail inválido.";
      valid = false;
    } else {
      foneError.innerText = "";
    }

    if (mensagem.value == "") {
      messageError.innerText = "Escreva alguma mensagem.";
      valid = false;
    } else {
      messageError.innerText = "";
    }
  
    if (telefone.value == "") {
      alert("Preencha o telefone.");
      valid = false;
    }

    let clienteNumero = document.getElementsByTagName("input")[4];
    if (clienteNumero.value == "") {
      alert("Preencha o número do cliente.");
      valid = false;
    }
  
    if (nascimento.value == "") {
      alert("Preencha a data de nascimento.");
      valid = false;
    }
  
    let generoMasc = document.getElementById("radioMasculino");
    let generoFem = document.getElementById("radioFeminino");
  
    if (!generoMasc.checked && !generoFem.checked) {
      alert("Selecione o gênero.");
      valid = false;
    }
  
    if (!termos.checked) {
      alert("Aceite os termos.");
      valid = false;
    }
  
    if (valid) {
      alert("Formulário enviado!");
    }
  }
  
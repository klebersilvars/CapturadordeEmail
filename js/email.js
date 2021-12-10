
let email = document.querySelector('.input__email');
let enviar = document.querySelector('.btn__enviar');
let pass = document.querySelector('.input__pass')

email.addEventListener('keyup', function() {
    if(email.value.length <= 5) {
        email.style.borderColor = "red"
    }else {
        email.style.borderColor = "#96BBE0"
    }
});  //VERIFICAÇÃO DO TAMANHO DIGITADO DO EMAIL

//VERIFICAR O BOTÃO DE CLICK

enviar.addEventListener('click', function() {
    if(email.value.length <= 5) {
        email.style.borderColor = "red";
        alert("Verifique o e-mail digitado")
    }else {
        firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)

        .then( (value)=> {
            swal("Cadastrado com sucesso!", "Aguarde as próximas atualizações, verificando sempre sua caixa de e-mail!", "success");
            email.value = "";

        })

        .catch( (error)=> {
            swal("Ops, algo deu errado!", "Algo deu errado, tente novamente!", "error");
        })
    }

    
})


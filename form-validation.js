function validar(){
    // pegando o valor do nome pelo id
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var texto = document.getElementById("texto");

    // verificando se o nome está vazio
    // pegando o valor do campo com id nome
    if(nome.value == ""){
        alert("Nome não informado");

        // deixa o input com focus
        nome.focus();
        
        //não seria necessario pois o retorno e void mas como tem codigo abaixo caso apresente error no primeiro ele para a execução
        return;
    }

    if(email.value == ""){
        alert("Email não informado");

        email.focus();
        return;
    }

    if(texto.value == ""){
        alert("Texto não informado");

        texto.focus();
        return;
    }

    alert("Formulario enviado");
    console.log(nome.value);
    console.log(email.value);
    console.log(texto.value);
    return;
}
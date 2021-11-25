let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let assuntoOk=false

nome.style.width = '100%'
email.style.width = '100%'
 //Validar se o nome é maior que 3 caracteres.
function validaNome (){
let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

//Função para validar o email se tem caracteristicas de um email
function validaEmail(){
let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email invalido'
        txtEmail.style.color = 'red'
    }
    else{
        txt.innerHTML = 'Email valido'
        txt.style.color = 'green'
        emailOk = true
    }

}
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >100){
        txtAssunto.innerHTML = 'Assunto acima de 100 Caracteres,Digite menos'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display='block'
    }
    else{
        txt.style.display='none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulario enviado')
    }else{
        alert('Preencha o formulario corretamente')
    }
}

function mapaZoom(){
    mapa.style.width = '700px'
    mapa.style.height = '500px'
}
function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
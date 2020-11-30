let nome = window.document.getElementById('nome')
let email = document.querySelector('#email') 
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (name.value.length < 3)
    {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }
    else
    {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomelOk = true
    }
}

function validaEmail() 
{
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.'))
    {
      txtNome.innerHTML = 'E-mail inválido'
      txtEmail.style.color = 'red'
    }
    else {
     txtNome.innerHTML = 'E-mail válido'
     txtEmail.style.color = 'green'
     emailOk = true
    }
 }

 function validaAssunto() {
    let txtAssunto = document.querySelector('#txtassunto')
    if(assunto.value.length >= 100)
    {
        txtAssunto.innerHTML = 'Máximo de 100 caracteres'
        txtAssunto.style.color = 'red'
    }
    else
     {
        txtAssunto.innerHTML = 'none'
        assuntoOk = true
     }
}


function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true)
    {
        alert('Enviado com sucesso!')
    }
    else
    {
        alert('Preencha corretamente o formulário')
    }
}

function mapaZoom() {
    mapa.style.width = "600px"
    mapa.style.height = "450px"

}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}
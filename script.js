function verificarImput(){
    let option = document.querySelector('select').value

    if(option == 'desabilitado'){
        document.querySelector('input').disabled = true
        let mensagem = document.querySelector('#mensagem')
        mensagem.innerHTML = "DESABILITADO"
        mensagem.style.color = "white"
        mensagem.style.backgroundColor = "red"
    }else{
        document.querySelector('input').disabled = false
        let mensagem = document.querySelector('#mensagem')
        mensagem.innerHTML = ""
        mensagem.style.color = ""
        mensagem.style.backgroundColor = ""
    }
}
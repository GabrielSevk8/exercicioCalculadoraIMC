function imc(){

    let nome = document.querySelector('#nome').value
    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value
    let resultado = document.querySelector('#result')

    if(nome!= "" && altura != "" && peso!=""){
        let valorImc = (peso/(altura*altura)).toFixed(1)

        if(valorImc <= 18.5){
            tipoIMC = 'Você esta abaixo do peso'
        }else if(valorImc >= 18.6 && valorImc <=24.9){
            tipoIMC = 'Peso Ideal'
        }else if(valorImc >= 25.0 && valorImc <=29.9){
            tipoIMC = 'Levemente acima do peso'
        }else if(valorImc >= 30.0 && valorImc <=34.9){
            tipoIMC = 'Obesidade Grau I'
        }else if(valorImc >= 35.0 && valorImc <=39.9){
            tipoIMC = 'Obesidade Grau II (Severa)'
        }else{
            tipoIMC = 'Obesidade Grau III (Mórbida)'
        }
        resultado.innerHTML = `Olá ${nome}, seu IMC é ${valorImc} e você está: ${tipoIMC}`
    } else {

        resultado.innerHTML = 'Preencha todos os campos!'
    }

}
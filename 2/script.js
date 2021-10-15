var element1 = document.getElementById('num1')
var element2 = document.getElementById('num2')

function minhafuncao(){
    if(parseInt(element1.value) >= 2 && parseInt(element1.value) <= 10 || parseInt(element2.value) >= 2 && parseInt(element2.value) <= 10){
        var div = document.getElementById('soma')

        div.innerHTML = (parseInt(element1.value) + parseInt(element2.value))
    }else{
        alert('Por favor insira um número no intervalo de 2 - 10')
    }
}

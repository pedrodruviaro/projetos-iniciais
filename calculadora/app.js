const btnIgual = document.querySelector('.igual')
const campo = document.querySelector('.campo')

btnIgual.addEventListener('click', ()=>{
    
    if(campo.value == 0){
        console.log('Digite um valor!')
        campo.focus()

    } else {

        let valorCampo = campo.value
    
        let res = eval(valorCampo)
    
        campo.value = res
        campo.focus()
    }
})

//teclas
const teclas = document.querySelectorAll('.tecla')
console.log(teclas);

const calculadora = document.querySelector(".calculadora")

console.log(calculadora);

calculadora.addEventListener('click', function(event){

    //numeros
    if(event.target == teclas[0]){
        campo.value += 9;
    }
    if(event.target == teclas[1]){
        campo.value += 8;
    }
    if(event.target == teclas[2]){
        campo.value += 7;
    }
    if(event.target == teclas[3]){
        campo.value += 6;
    }
    if(event.target == teclas[4]){
        campo.value += 5;
    }
    if(event.target == teclas[5]){
        campo.value += 4;
    }
    if(event.target == teclas[6]){
        campo.value += 3;
    }
    if(event.target == teclas[7]){
        campo.value += 2;
    }
    if(event.target == teclas[8]){
        campo.value += 1;
    }
    if(event.target == teclas[9]){
        campo.value += 0;
    }
    
    //operadores
    if(event.target == teclas[10]){
        campo.value += "/";
    }
    if(event.target == teclas[11]){
        campo.value += "*";
    }
    if(event.target == teclas[12]){
        campo.value += "-";
    }
    if(event.target == teclas[13]){
        campo.value += "+";
    }

    //clear
    if(event.target == teclas[15]){
        campo.value = "";
        campo.focus()
    }
})
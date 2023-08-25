document.addEventListener("DOMContentLoaded", function() {

    const btns = document.getElementsByClassName('btn');
    for(let i=0;i<btns.length;i++){
        btns[i].addEventListener('click', function(){
            calcular(btns[i].textContent);
        });
}

});

let cadena = '';
let resultado = 0;
let resultadoaux = 0; // lo uso para poder volverlo a 0 cuando apreto el signo = y no perder el resultado escrito en la pantalla
let numeroAux = 0;
let operador = '';


function calcular(x){ 
    if( x!='+' && x!='-' && x!='*' && x!='/' && x!='=' && x!='c' ){
        escribir(x);
    } else switch(x){
        case '+':
            sumar();
            break;
        case '-':
            restar();
            break;
        case '/':
            dividir();
            break;
        case '*':
            multiplicar();
            break;
        case '=':
            igual();
            break;
        case 'c':
            borrar();
            break;
        default:
            alert('error');
            break;
    }
}
function escribir(x){
    cadena += x;
    document.querySelector('.inp-display').value = cadena;
}
function borrar(){
        cadena='';
        resultado = 0;
        operador = '';
        escribir(cadena);
}
function igual(){
    switch(operador){
        case '+':
            resultado = numeroAux + parseInt(cadena);
            resultadoaux = resultado
            cadena = '';
            escribir(cadena);
            break;

        case '-':
            resultado = numeroAux - parseInt(cadena);
            resultadoaux = resultado
            cadena = '';
            escribir(cadena);
            break;

        case '/':
                
            break;

        case '*':
            resultado = numeroAux * parseInt(cadena);   
            cadena = '';
            escribir(cadena);
            break;
     }

    escribir(resultado);
    cadena = '';
    numeroAux = 0;
    operador = '';
    resultadoaux = 0;
}
function sumar(){
    operador = '+';
    if(cadena != ''){ //verifico si ya realice operacion
        numeroAux += parseInt(cadena);   
        cadena = '';
        escribir(cadena);
    } else {
        numeroAux = resultado;
    }
}
function restar(){
    // pongo un bool para verificar la primera resta y que el primer numero no sea obligatoriamente negativo

    operador = '-';
    if(cadena != ''){ //verifico si ya realice operacion
        numeroAux -= parseInt(cadena);
        cadena = '';
        escribir(cadena);
    } else {
        numeroAux = resultado; 
    }
}
function multiplicar(){
    operador = '*';
    if(cadena != ''){ //verifico si ya realice operacion
        numeroAux = parseInt(cadena);   
        cadena = '';
        escribir(cadena);
    } else {
        numeroAux = resultado;
    }
}







function dividir(){

}
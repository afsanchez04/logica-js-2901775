
//1. Variables
const boton = document.getElementById('boton');
console.log(boton)

//2. Funciones
function cambiarBoton(){
    boton.value =  'nuevo texto desde JS'
}

//3. Eventos
boton.addEventListener('click',cambiarBoton)


//Ejercicio de la caja que se pinta:

//1. variables
const cuadrito = document.getElementById('caja');

//2. funciones
function colorear (color){
    cuadrito.style.backgroundColor = color;
}

//3. eventos
//El evento para este ejercicio lo vamos a hacer con onclick desde HTML



//Ejercicio de mover la pelotica

const pelota = document.getElementById('circulo');

function mover (){
    pelota.style.marginLeft = '400px';
    pelota.style.backgroundColor = 'tomato';
    pelota.style.transitionDuration = '.5s';
}



//Capturar imagen en constante
//Capturar botón en constante

const miImg = document.getElementById('miImagen');
const mibtn = document.getElementById('btnCambiar');
let i = 0;
function cambiarImg(){
    if(i==0){
        miImg.src = 'imagen2.jpg'
        miImg.style.width = '380px'
        miImg.style.borderRadius = '25px';
        i=1;
    }else{
        miImg.src = 'imagen.png'
        i=0;
    }
}
mibtn.addEventListener('click',cambiarImg);

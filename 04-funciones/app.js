

/* function mezclar (color1, color2){
    return 'la suma de los colores da: ' + (color1 + color2)
}   

mezclar(); */

//Primero crear la función
function saludar (){
    return 'hola mundo';
}

//Segundo se llama la función
console.log( saludar() ) 

let mensaje = `Saludo: ${saludar()} javascript`; 
console.log( mensaje ); //


function bienvenida (nombre, pais){
    return 'Bienvenido ' + nombre + ' a tu país ' + pais;
}

let result = bienvenida ('Carlos', 'Colombia');

console.log(result)


//Función que me dice la fecha:

//1. Declaración de variables:
const miInput = document.getElementById('input');
const miBoton = document.getElementById('btn');

//2. Creación de funciones
function mostrarFecha(){
    let fecha = miInput.value;
    alert( `El día de la semana es: ${fecha}` );
    return `El día de la semana es: ${fecha}`; 
} 

//3. Llamado a función y eventos
miBoton.addEventListener('click',mostrarFecha);

console.log(miInput);
console.log(miBoton);

/* let fecha = mostrarFecha('martes');
console.log(fecha); */
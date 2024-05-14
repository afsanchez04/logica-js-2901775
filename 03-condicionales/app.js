



//Condicional para decirle al usuario si es mayor o menor de edad

//Declare una variable que se llame edad y asignele al número 16

//Aquí...
let edadUsuario = 16;
let edadPermitida = 18;

if(edadUsuario >= edadPermitida){
    console.log('Eres mayor de edad')
}else{
    console.log('Eres menor de edad')
}

//Hacer una condicional donde si es de colombia come frijoles ,si es de mexico come taco y si es de argentina come choripan y si no es de ningún pais no come
//Colombia
//colombia
//ColOmbIa
// .toLowerCase()  //convierte el texto a minúscula
// .toUpperCase()  //conviente el texto a mayúscula

let paisUsuario = prompt('Dime tu país').toLowerCase();

if(paisUsuario === 'colombia'){
    console.log('Comes frijoles')
}else if(paisUsuario === 'mexico'){
    console.log('Comes tacos')
}else if(paisUsuario === 'argentina'){
    console.log('Comes choripan')
}else{
    console.log('No come nada')
}

console.log(paisUsuario)


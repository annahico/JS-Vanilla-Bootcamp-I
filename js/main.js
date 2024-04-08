// DATOS COMPLETOS o ARRAY

let peliculas = ["el señor de los anillos", "harry potter", "star wars", "parque jurasico", "la vida de brian", "orgullo y prejuicio"] //esto es un ARRAY

console.log(peliculas[0]); //permite guardar una matriz de datos

let hobbiesJuanPablo = ["correr", "futbol", "lol", "cocinar"]

hobbiesJuanPablo[2];

///////////////////////////////////////

let pablo = {
    nombre: "Pablo",
    edad: 30,
    altura: 1.85,
    hobbies: {
        hobbie1: "futbol",
        hobbie2: "xbox",
        hobbie3: "bicicleta",
    }
}

console.log(pablo.hobbies.hobbie3)

//MANEJO DEL ARRAY

let videojuegosDani = ["gta5", "rdr", "counter"];

console.log("primero", videojuegosDani);

videojuegosDani.push("rocket league"); //introduce un elemento al final del ARRAY

console.log("segundo", videojuegosDani);

//Prueba de manejos de ARRAY

let verduras = ["colifor", "lechuga", "apio", "cebolla", "pimiento", "puerro"];

verduras.shift() //elimina el primer elemento del ARRAY

verduras.unshift("tomate") //intriduce un elemento en la primera posición del ARRAY

verduras.pop() //elimina el último elemento del ARRAY

verduras.pop() //elimina el último elemento del ARRAY

verduras.push("espinacas") ///introduce un elemento al final del ARRAY

console.log(verduras)

//BUCLES

let arrayComida = ["kebab", "pizza", "frankfurt", "sopa", "natillas", "canelones", "hamburguesa", "ramen", "gratinado", "pasta"];

// BUCLE FOR

for (let contador = 0; contador < arrayComida.length; contador++) {
    //primero el iterador, luego la condicion y finalmente el incremento o decremento
    if (arrayComida[contador] === "pasta") {
        console.log("Si hay pasta")
        break;
    }
}

/* Proposición de ejercicio...
Muestra los números del 1 al 100 mediante el uso de un bucle for.*/

for (let contador = 0; contador < 101; contador++) {
    console.log(contador);
}

//...BUCLE WHILE

let manolito = 10;

while (manolito > 0) { //esto es un bucle infinito
    console.log("eo eo eo", manolito)
    manolito--
}


//conseguir que en bucle WHILE salgan solo los numeros pares

let numero = 0;

while (numero <= 10) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
    numero++;
}


// Proposición de ejercicio...// Generad un bucle que cuente de 1 a 100 (puede ser tanto un for como un while, a vuestra elección)
// Tan sólo mostraremos por console.log, aquellos números que se puedan dividir dando resto 0 (es decir, ser múltiples), de 3, de 5 O de 3 y 5

let x = 0;

for (let x = 1; x <= 100; x++) {
    if (x % 3 === 0 || x % 5 === 0){
        if (x % 15 === 0) {
            console.log(x); //este es divisible entre 3 y 5
        }
        console.log(x);
    }
}

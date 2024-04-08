/*
VANILLA I JAVASCRIPT

1. Declara 2 variables numéricas (con el valor que desees)
e indica cual es mayor de los dos. Si son iguales indicarlo también. 
Ves cambiando los valores para comprobar que funciona.

*/

// let numero1 = 1;
// let numero2 = 2;

// if (numero1 > numero2) {
//     console.log("El numero1 es mayor que el numero2");
// } else if (numero2 === numero1) {
//     console.log("Los dos números son iguales");
// } else {
//     console.log("El numero2 es mayor que el numero1");
// }

//Forma Alternativa

// numero1 === numero2
//     ? console.log("Iguales")
//     : numero1 > numero2
//         ? console.log("Numero1 es el mayor")
//         : console.log("Numero2 es el mayor")

//////////////////////////////////////////////////////////

/* 2. Declara un String que contenga tu nombre, después muestra un mensaje de bienvenida
    por consola. Por ejemplo: si introduzco “Fernando”, me aparezca “Bienvenido Fernando”.*/

// let nombre = "Fernando"
// console.log("Bienvenido " + nombre);
// console.log("Bienvenido", nombre)
// console.log(`Bienvenido ${nombre}`); //INTERPOLACIÓN

//////////////////////////////////////////////////////////

/* 3. Modifica la aplicación anterior, para que nos pida el nombre que queremos introducir
    (recuerda usar prompt).*/

// let nombreDos = prompt("Dime tu nombre")
// console.log("Bienvenido", nombreDos);

//////////////////////////////////////////////////////////

/* 4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado
    (recuerda pasar de String a double con parseDouble). Usa la constante PI. */

// let radio = parseFloat(prompt("Por favor, introduce el área del círculo")); //es una función en JavaScript que toma una cadena como entrada y la convierte en un número decimal de punto flotante
// let resultado = 2 * Math.PI * radio;
// console.log("el resultado es " + resultado);

//////////////////////////////////////////////////////////

/* 5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
    debemos indicarlo. */

// let numero = prompt("Introduce un número")
// if (numero % 2 === 0) {
//     console.log("El número es divisible de forma exacta")
// } else {
//     console.log("El número NO es divisible de forma exacta")
// }

/////////////////////////////////////////////////////////////

/*11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral o no. Usa un switch para ello.*/

// function esDiaLaboral(dia) {
//     switch (dia.toLowerCase()) {
//         case "lunes":
//         case "martes":
//         case "miércoles":
//         case "jueves":
//         case "viernes":
//             return true;
//         case "sábado":
//         case "domingo":
//             return false;
//         default:
//             return "Día no válido";
//     }
// }

// function main() {
//     let dia = prompt("Ingrese un día de la semana: ");
//     let esLaboral = esDiaLaboral(dia);
//     if (esLaboral === "Día no válido") {
//         alert("Por favor ingrese un día válido de la semana.");
//     } else if (esLaboral) {
//         alert(dia.charAt(0).toUpperCase() + dia.slice(1) + " es un día laboral.");
//     } else {
//         alert(dia.charAt(0).toUpperCase() + dia.slice(1) + " no es un día laboral.");
//     }
// }
// main();



//////////////////////////////////////

/*12. Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
    se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
    más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
    condición de salida (3 intentos y si acierta sale, aunque le queden intentos).*/

    // Definimos la contraseña
let contrasena = "contraseña123";

function verificarContrasena() {
    // Número máximo de intentos
    let intentosMaximos = 3;
    // Variable para contar los intentos
    let intentos = 0;
    
    // Bucle para pedir la contraseña hasta que se acierte o se agoten los intentos
    while (intentos < intentosMaximos) {
        // Solicitar la contraseña al usuario
        let intentoContrasena = prompt("Introduce la contraseña:");
        
        // Verificar si la contraseña es correcta
        if (intentoContrasena === contrasena) {
            // Mostrar mensaje de éxito
            alert("¡Enhorabuena! Has ingresado la contraseña correcta.");
            // Salir del bucle
            break;
        } else {
            // Incrementar el contador de intentos
            intentos++;
            // Mostrar mensaje de intento fallido
            alert("Contraseña incorrecta. Intento " + intentos + " de " + intentosMaximos);
        }
    }
    
    // Si se agotan los intentos y no se ha acertado la contraseña, mostrar mensaje de error
    if (intentos === intentosMaximos) {
        alert("Se han agotado los intentos. La aplicación se cerrará.");
    }
}

// Llamar a la función para iniciar la verificación de la contraseña
verificarContrasena();


//1. Crea una función que tome dos números como argumentos y devuelva su suma.

function Sumar(numero1,numero2) {
    return(numero1 + numero2)
}

let numero1 = Number(prompt("Ingrese El Primer Numero"))
let numero2 = Number(prompt("Ingrese El Segundo Numero"))

console.log("La Suma De",numero1, "Mas", numero2, "Es", Sumar(numero1,numero2))

//2. Crea una función que tome una cadena como argumento y devuelva el número de caracteres que tiene.

function CantLetras(palabra) {
    return palabra.length 
}

let palabra = prompt("Ingrese Su Palara")

console.log("La Palabra", palabra ,"Tiene:",CantLetras(palabra),"Letras");

//3. Solicita al usuario su edad y muestra un mensaje que indique si es mayor de edad o no.

let edad = prompt("Ingrese Su Edad")

if (edad >= 18) 
{console.log("Usted Es Mayor De Edad Con", edad ,"Años")}
else
{console.log("Usted Es Menor De Edad Con", edad ,"Años")}

//4. Pide al usuario que ingrese un número y muestra un mensaje que indique si es positivo o negativo.

let valor = Number(prompt("Ingrese Un Numero"));

if (valor > 0) 
{console.log("El Numero", valor ,"Es Positivo")}
else if (valor < 0)
{console.log("El Numero", valor ,"Es Negativo")}
else
{console.log("El Numero Es Cero/Invalido")}

//5. Solicitar al usuario dos numeros y que seleccione de las operaciones basicas y muestre el resultado


let val1 = Number(prompt("Ingrese El Primer Numero"));
let val2 = Number(prompt("Ingrese El Segundo Numero"));
let op = Number(prompt("Ingrese Su Operacion: (1)Suma, (2)Resta, (3)Multiplicacion, (4)Division"));

if (op == 1) 
    {console.log(val1,"+",val2,"=",val1 + val2);}
    else if (op == 2)
        {console.log(val1,"-",val2,"=",val1 - val2);}
    else if (op == 3)
        {console.log(val1,"*",val2,"=",val1 * val2);}
    else if (op == 4)
        {console.log(val1,"/",val2,"=",val1 / val2);}
    else
    {console.log("Ingrese Un Valor Valido");}

//6. Pide al usuario que ingrese un número y muestra un mensaje que indique si es par o impar.

let paro = Number(prompt("Ingrese Su Numero"));
let parono = paro%2

if (parono == 1) 
{console.log("El Numero",paro,"Es Impar")}
else
{console.log("El Numero",paro,"Es Par")}

//7. Solicita al usuario su nombre y su género, y muestra un mensaje que indique si es hombre o mujer.

let namesion = prompt("Ingrese Su Nombre");
let sexo = prompt("Ingrese Su Genero");
let genero = sexo.toUpperCase();

if (genero == "HOMBRE" || genero == "MASCULINO" || genero == "MACHO") 
{console.log("El Usuario",namesion,"Es Hombre");}
else if (genero == "MUJER" || genero == "FEMENINO" || genero == "HEMBRA") 
{console.log("El Usuario",namesion,"Es Mujer");}
else 
{console.log("El Genero No Es Reconocible");}

//8. Realizar la tabla de multiplicar del número ingresado por el usuario

let tablas = 1;
let numberacion = Number(prompt("Ingrese Su Numero"));

for(let i = 1; i < 11; i++, tablas++){
    console.log(numberacion*tablas)
}

//9. Crea una función que tome un array de strings como argumento y devuelva un nuevo array con todas las strings en mayúsculas.

let frutas = ["pera","manzana","banano","piña","naranja"];
let fruits = frutas.map(function(palabras){
    return palabras.toUpperCase()
})

console.log(fruits);

//10. Crear una función que al momento de darle click a un botón que diga Hola, bienvenido al curso práctico de javascript

function mostrarcurso(){
    alert("Bienvenido Al Curso Práctico De Javascript")
}

//11. Crear una función donde coloque el nombre, la edad y la profesión me muestre un mensaje: Bienvenido Jimmy Lombana al curso de java, tiene 30 años y eres Ingeniero de sistemas

function mostraring(){
    alert("Bienvenido", sujeto ,"al curso de java, tienes ", wawa ,"años y eres", chamba)
}
let edad = 19
let resultado = document.querySelector("#resultado")
let botonEjecutar = document.querySelector("#ejecutar")
let botonEjecutar1 = document.querySelector("#ejecutar1")
let botonEjecutar2 = document.querySelector("#ejecutar2")
let botonEjecutar3 = document.querySelector("#ejecutar3")
let botonEjecutar4 = document.querySelector("#ejecutar4")
let botonEjecutar5 = document.querySelector("#ejecutar5")
let botonEjecutar6 = document.querySelector("#ejecutar6")

// Ejercicio 1

botonEjecutar.onclick = function () {
 if (edad >= 18) { 
    resultado.textContent = "Eres mayor de edad."
}
else {
    resultado.textContent = "Eres menor de edad." 
}}

//Ejercicio 2
let nombreUsuario = "Marcos"
botonEjecutar1.onclick = function (){
if (nombreUsuario = Nahuel) {
    resultado.textContent = "Bienvenido Nahuel, ¿cómo estás?"
}
else {
    resultado = "Bienvenido usuario"
}}

//Ejercicio 3
let nombreUsuario2 = "Elias"
botonEjecutar2.onclick = function (){ 
if (nombreUsuario2 = "Nahuel" || "Marcos" ){
    resultado.textContent = ("Bienvenido " + nombreUsuario2 + " ¿cómo estás?")
}
else {
resultado.textContent = ("Bienvenido "+nombreUsuario2)
}}

//Ejercicio 4
let numero = 12
botonEjecutar3.onclick = function (){
if (numero > 0){
    resultado.textContent = ("El número es positivo.")
}
else if (numero < 0) {
    resultado.textContent = ("El número es negativo.")
}
else if (numero = 0){
    resultado.textContent = ("El número es cero.")
}}

//Ejercicio 5
edad2 = 10
botonEjecutar4.onclick = function (){ 
if (edad2 >= 6 && edad2 <= 11){
    resultado.textContent = "La edad corresponde a un niño."
} 
else if (edad2 >= 12 && edad2 <= 18){
    resultado.textContent = "La edad corresponde a un adolescente."
}
else if (edad2 >= 19 && edad2 <=26 ){
    resultado.textContent = "La edad corresponde a un joven."
}
else if (edad2 >= 27 && edad2 <= 59){
    resultado.textContent = "La edad corresponde a un adulto."
}
else if (edad2 >=60){
    resultado.textContent = "La edad corresponde a un anciano."
}}

//Ejercicio 6
let dia = "jueves"
botonEjecutar5.onclick = function (){
if (dia = "lunes" || "martes" || "miércoles" || "jueves" || "viernes" )
{ resultado.textContent = "Es un día laborable."
}else if (dia = "sábado" || "domingo"){
    resultado.textContent = "Es fin de semana."
}}

//Ejercicio 7
let password = "secreto"
botonEjecutar6.onclick = function (){
    if (password = "secreto"){
        resultado.textContent = "Acceso concedido."
    } else {
        resultado.textContent = "Acceso denegado."
    }}
    
let edad = 19
let resultado = document.querySelector("#resultado")
let botonEjecutar = document.querySelector("#ejecutar")

botonEjecutar.onclick = function () {
 if (edad >= 18) { 
    resultado.textContent = "Eres mayor de edad."
}
else {
    resultado.textContent = "Eres menor de edad." 
}}

let nombreUsuario = "Marcos"
botonEjecutar.onclick = function (){
if (nombreUsuario = Nahuel) {
    resultado.textContent = "Bienvenido Nahuel, ¿cómo estás?"
}
else {
    resultado = "Bienvenido usuario"
}}

let nombreUsuario2 = "Elias"
botonEjecutar.onclick = function (){ 
if (nombreUsuario2 = "Nahuel" || "Marcos" ){
    resultado.textContent = ("Bienvenido " + nombreUsuario2 + " ¿cómo estás?")
}
else {
resultado.textContent = ("Bienvenido "+nombreUsuario2)
}}
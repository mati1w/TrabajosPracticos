let boton = document.querySelector ("#añadir")
let sumario = document.querySelector ("#total")
let parrafo = document.querySelector ("#parrafo")

let galletitas = 0

boton.onclick  = function (){
galletitas = galletitas + 1
sumario.textContent = galletitas

if (galletitas <= 10){
    parrafo.style.color = 'green'
 } else if ((galletitas >= 10) && (galletitas <= 20)) {
 parrafo.style.color = 'yellow'
 } else {
     parrafo.style.color = 'red'
 }
}


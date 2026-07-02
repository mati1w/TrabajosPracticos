let parrafo = document.querySelector ("#parrafo1")
let botonFondo = document.querySelector ("#but1")
let botonTexto = document.querySelector ("#but2")
let botonColor = document.querySelector ("#but3")
let botonLetra = document.querySelector ("#but4")
let titulo = document.querySelector ("h1")
 
botonFondo.onclick = function (){
    parrafo.style.backgroundColor = "blue"
    }

botonColor.onclick = function () {
    parrafo.style.color = 'white'
}
botonLetra.onclick = function (){
    parrafo.style.font = 'sans-serif'
}
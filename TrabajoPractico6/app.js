let titulo = document.querySelector ("p")
let boton = document.querySelector ("button")

boton.onclick = function () {
    titulo.textContent = "Buen día tercero"
titulo.style.color = "purple"
titulo.style.backgroundColor = "yellow"
titulo.style.fontFamily = "Arial"
}
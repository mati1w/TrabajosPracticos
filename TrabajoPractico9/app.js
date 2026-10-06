// 1. mayor
function mayor(numero1, numero2){
    if(numero1 > numero2){
        return numero1
    }else{
        return numero2
    }
}

// 2. menor
function menor(numero1, numero2){
    if(numero1 < numero2){
        return numero1
    }else{
        return numero2
    }
}

// 3. iguales o distintos
function iguales(n1, n2){
    if(n1 == n2){
        return 'son iguales'
    }else{
        return 'son diferentes'
    }
}

// 4. iva
function calcularIva(compra){
    let resultado = compra * 0.21
    return resultado
}

// 5. saludar
function saludar(nombre){
    let saludo
    saludo = 'Hola ' + nombre + ' como estas'
    return saludo
}

// 6. modo oscuro
function modoOscuro(){
    let cuerpo = document.querySelector('body')
    cuerpo.style.backgroundColor = 'black'
    cuerpo.style.color = 'white'
}

// 7. modo claro
function modoClaro(){
    let cuerpo = document.querySelector('body')
    cuerpo.style.backgroundColor = 'white'
    cuerpo.style.color = 'black'
}


// BOTONES Y EVENTOS

let boton1 = document.querySelector('#btn1')
boton1.onclick = function(){
    let i1 = document.querySelector('#num1')
    let i2 = document.querySelector('#num2')
    let res = mayor(i1.value, i2.value)
    let p = document.querySelector('#p1')
    p.textContent = res
}

let boton2 = document.querySelector('#btn2')
boton2.onclick = function(){
    let i1 = document.querySelector('#n1')
    let i2 = document.querySelector('#n2')
    let res = menor(i1.value, i2.value)
    let p = document.querySelector('#p2')
    p.textContent = res
}

let boton3 = document.querySelector('#btn3')
boton3.onclick = function(){
    let i1 = document.querySelector('#val1')
    let i2 = document.querySelector('#val2')
    let res = iguales(i1.value, i2.value)
    let p = document.querySelector('#p3')
    p.textContent = res
}

let boton4 = document.querySelector('#btn4')
boton4.onclick = function(){
    let i1 = document.querySelector('#precio')
    let res = calcularIva(i1.value)
    let p = document.querySelector('#p4')
    p.textContent = res
}

let boton5 = document.querySelector('#btn5')
boton5.onclick = function(){
    let i1 = document.querySelector('#nom')
    let res = saludar(i1.value)
    let p = document.querySelector('#p5')
    p.textContent = res
}

let btnOsc = document.querySelector('#btnOscuro')
btnOsc.onclick = modoOscuro

let btnCla = document.querySelector('#btnClaro')
btnCla.onclick = modoClaro

let numRandom = Math.floor(Math.random()*100) + 1;

let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let random = document.getElementById("random")

function checkResult() {
    let numeroIngresado = parseInt(numeroEntrada.value);

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent ="Entre 1 y 100 ❌";
        return
    } 
    
    if (numRandom > numeroIngresado){
        mensaje.textContent = 'Casi! Intenta ir mas ALTO ⬆'
    } else {
        mensaje.textContent = 'Casi! Intenta ir mas BAJO ⬇'
    } 
    
    if (numeroIngresado == numRandom){
        mensaje.textContent = 'Acertaste ✅' 
        random.innerHTML = 'El numero oculto era <b>' + numRandom + '</b>'
        numeroEntrada.disabled = true;
    } 
}
let worker1 = new Worker('worker1.js');
let worker2 = new Worker('worker2.js')
function calcularQuadrado(){
    worker1.postMessage(Number(document.getElementById('inputNumber1').value))
    
}
worker1.addEventListener('message', ev => {
    const quadrado = ev.data;
    
    document.getElementById('resultado1').textContent =  `O quadrado do número digitado é: ${quadrado}`;
});

function calcularFatorial(){
    worker2.postMessage(Number(document.getElementById('inputNumber2').value))
    
}
worker2.addEventListener('message', ev => {
    const fatorial = ev.data;
    
    document.getElementById('resultado2').textContent =  `O fatorial do número digitado é: ${fatorial}`;
});
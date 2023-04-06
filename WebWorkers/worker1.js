addEventListener('message', ev => {
    const inputNumber1 = ev.data;
    const quadrado = inputNumber1**2;
    postMessage(quadrado);
    
})
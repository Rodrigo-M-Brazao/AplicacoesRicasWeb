addEventListener('message', ev => {
    const inputNumber2 = ev.data;
    let fatorial = 1;
    for(let i = inputNumber2; i > 0; i--){
        fatorial*= i;
    }
     
    postMessage(fatorial);
    
})
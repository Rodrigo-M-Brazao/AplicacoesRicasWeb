let pesoTotal = 0;


function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData('text', ev.target.id);
}


// const div = document.getElementById('div1');

// div.addEventListener('dragstart', drag)
function drop(ev){
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text')
    ev.target.appendChild(document.getElementById(data));
}

if(ev.target.id === 'div2'){
    pesoTotal += parseInt(event.target.childNodes[0].getAttributes("data-peso"));
}else if(ev.target.id === 'div1'){
    pesoTotal -= parseInt(event.target.childNodes[0].getAttributes("data-peso"));
}
// Mostra o peso ae 
document.getElementById('pesoTotal').innerHTML = `Peso total: ${pesoTotal} kg`;
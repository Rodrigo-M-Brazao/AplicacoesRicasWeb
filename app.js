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
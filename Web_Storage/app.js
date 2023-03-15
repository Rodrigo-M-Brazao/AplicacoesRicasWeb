// var nome = window.prompt("Entre com seu nome: ");

// localStorage.setItem('Nome', nome);

// alert("Olá " + localStorage.getItem('Nome'))

// document.write("Seu nome é:" + localStorage.getItem("Nome"));

// var endereco = prompt("Entre com seu endereço: ");
// localStorage.setItem('Endereço', endereco);
// alert("Endereço: " + localStorage.getItem('Endereço'));
// var cpf = prompt("Entre com seu CPF: ");
// localStorage.setItem('CPF', cpf);
// alert('CPF: ' + localStorage.getItem('CPF'));
// var numDep = prompt("Entre com o Nº de dependentes: ");
// localStorage.setItem('Número de dependentes', numDep);
// alert("Nº de dependentes: " + localStorage.getItem('Número de dependentes'))
if(sessionStorage.visitas){
    sessionStorage.visitas = Number(sessionStorage.visitas) + 1;
}else{
    sessionStorage.setItem("visitas", 1)
}
document.write('Visitas: ' + sessionStorage.visitas)
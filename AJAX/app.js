window.onload=function(){
    var url = "http://api.openweathermap.org/data/2.5/weather?";
    var keyAPI = "c82eaca73f640de5b48fa0328839b60b";
    var resultado;
    var cidade;
    var cidades = document.getElementById('cidades');
    cidades.onchange = function(){
        var ajax = null;
        if(window.XMLHttpRequest){
            ajax = new XMLHttpRequest();
        }else if(window.ActiveXObject){
            ajax = new ActiveXObject('Msxml2.XMLHTTP');
        }
    
        cidade = cidades.value;
        if(cidade != 0){
            ajax.open("GET", `${url}appid=${keyAPI}&q=${cidade}&units=metric&lang=pt`,true);
            ajax.send(null);
            ajax.onreadystatechange = function(){
                if(ajax.readyState === 4){
                    if(ajax.status === 200){
                        console.log(ajax.responseText);
                        // resultado = JSON.parse(ajax.responseText);
                        // console.log(resultado);
                        // console.log(resultado.name);
                        // console.log(resultado.main.temp_min);
                        // console.log(resultado.main.temp_max);
                        // console.log(resultado.weather[0].description);
                    }
                }
            }
        }
    }
}
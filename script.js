//----------------------------CREO MIS VARIABLES------------------------
//Utilizamos el metodo "document.querySelectorAll" para poder manipular el DOM y acceder al documento y sus elementos
let button = document.querySelector('button');
let input = document.querySelector('input');

//----------------------------CREO MI CODIGO--------------------------------
//Creo una funcion que me permitira manipular dentro el pedido AJAX y mostrar pos pantalla la ciudad ingresada
function cargarCiudad(ciudad) {
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`, function (data) { //mi api en ingles 
        document.querySelector("#ciudad").textContent = data.name
        document.querySelector("#temperatura").textContent = Math.floor(data.main.temp);
        document.querySelector('#grados').innerHTML = '<sup>°C</sup>'
        console.log(data.main.temp)
        document.querySelector('#wicon').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.querySelector('#descripcion').textContent = data.weather[0].description;
        document.querySelector(".container").style.visibility = "visible"

    })
    .fail(function() {
        alert("Ciudad no encontrada");
    })
}

//Evento "click" y "keypress" que permitira al usuario interactuar con la pagina al momento de ingresar la ciudad
button.addEventListener('click', function () {
    if (!input.value){
        alert('Ingrese una ciudad')
    }else {
        let ciudad = input.value.split(' ').join('%20');
        input.value= ''; 
        cargarCiudad(ciudad)
    }
})

input.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        if (!input.value){
            alert('Ingrese una ciudad')
        }else {
            let ciudad = input.value.split(' ').join('%20');
            input.value= ''; 
            cargarCiudad(ciudad)
        }
    }
})
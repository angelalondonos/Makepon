window.addEventListener('load', iniciarJuego);

/* Carga los elementos del HTML */
function iniciarJuego(){
//Declaración de variables definidas en el HTML
let btnMascota = document.getElementById('boton-mascota');
btnMascota.addEventListener('click', seleccionarMascotaJugador);

}

/* Esta funcion permite saber que mascota eligió el jugador */
function seleccionarMascotaJugador(){

    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');

    if(inputHipodoge.checked){
        alert("Seleccionaste a Hipodoge");
    }else if(inputCapepo.checked){
        alert("Seleccionaste a Capipepo");
    }else if(inputRatigueya.checked){
        alert("Seleccionaste a Ratigueya");
    }else {
        alert("Selecciona una mascota");
    }
}   

let ataqueJugador
let ataqueEnemigo
let resultado

window.addEventListener('load', iniciarJuego)


/* Carga los elementos del HTML */
function iniciarJuego(){
//Declaración de variables definidas en el HTML
let btnMascota = document.getElementById('boton-mascota')
btnMascota.addEventListener('click', seleccionarMascotaJugador)
let botonFuego=document.getElementById('boton-fuego')
botonFuego.addEventListener('click',ataqueFuego)
let botonAgua=document.getElementById('boton-agua')
botonAgua.addEventListener('click',ataqueAgua)
let botonTierra=document.getElementById('boton-tierra')
botonTierra.addEventListener('click',ataqueTierra)
}

/* Esta funcion permite saber que mascota eligió el jugador */
function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML= 'Hipodoge'
    }else if(inputCapepo.checked){
        spanMascotaJugador.innerHTML= 'Capipepo'
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML= 'Ratigueya'
    }else {
        alert("Selecciona una mascota")
    }
    seleccionarMascotaEnemigo()
} 

/* Esta funcion permite saber que mascota eligió el enemigo */
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatorio==1){
        spanMascotaEnemigo.innerHTML= 'Hipodoge'
    }else if(mascotaAleatorio==2){
        spanMascotaEnemigo.innerHTML= 'Capipepo'
    }else {
        spanMascotaEnemigo.innerHTML= 'Ratigueya'
    }
}

//Funciones de ataque del jugador
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

/* Función para el ataque aleatorio del enemigo */
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if(ataqueAleatorio==1){
        ataqueEnemigo= 'FUEGO'
    }else if(ataqueAleatorio==2){
        ataqueEnemigo= 'AGUA'
    }else {
        ataqueEnemigo= 'TIERRA'
    }    

    combate()
} 

/* Funcón que permite enviar los mesajes del estado del juego al HTML */
function crearMensaje(){
    let sectioMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ' y la mascota del enemigo atacó con ' + ataqueEnemigo + '.'+ resultado
    sectioMensaje.appendChild(parrafo)
}

/* Función que permite verificar el resultado del combate entre el jugador y el enemigo */
function combate(){
    if(ataqueEnemigo == 'FUEGO' && ataqueJugador == 'TIERRA' || ataqueEnemigo == 'AGUA' && ataqueJugador == 'FUEGO' || ataqueEnemigo == 'TIERRA' && ataqueJugador == 'AGUA'){
        resultado = 'Ganaste!!'
    }else  if(ataqueEnemigo == ataqueJugador){
        resultado = 'Empate!!'
    }else {
        resultado = 'Perdiste' 
    }

    crearMensaje()
}

/* Crear mascota aleatoria para el enemigo */
function aleatorio(min,max){
    return Math.floor(Math.random()* (max - min + 1)+min)
}


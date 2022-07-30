let ataqueJugador
let ataqueEnemigo
let resultado
let vidasJugador = 3
let vidasEnemigo = 3

window.addEventListener('load', iniciarJuego)


/* Carga los elementos del HTML */
function iniciarJuego(){

    //Ocultar las secciones 
    let sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display='none'
    let sectionReiniciar=document.getElementById('reiniciar')
    sectionReiniciar.style.display='none'

    //Declaración de variables definidas en el HTML
    let btnMascota = document.getElementById('boton-mascota')
    btnMascota.addEventListener('click', seleccionarMascotaJugador)
    let botonFuego=document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua=document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra=document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
    let botonReiniciar=document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

/* Esta funcion permite saber que mascota eligió el jugador */
function seleccionarMascotaJugador(){
    let sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display='block'
    let sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display='none'

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
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
        if(ataqueEnemigo == 'FUEGO' && ataqueJugador == 'TIERRA' || ataqueEnemigo == 'AGUA' && ataqueJugador == 'FUEGO' || ataqueEnemigo == 'TIERRA' && ataqueJugador == 'AGUA'){
            resultado = 'Ganaste!!'
            vidasEnemigo --
            spanVidasEnemigo.innerHTML = vidasEnemigo
            crearMensaje()
        }else  if(ataqueEnemigo == ataqueJugador){
            resultado = 'Empate!!'
            crearMensaje()
        }else {
            resultado = 'Perdiste' 
            vidasJugador --
            spanVidasJugador.innerHTML = vidasJugador 
            crearMensaje()
        }
        
        revisarVidas()
}
/* Función que permite verificar que el jugador o el enemigo tengan 0 vidas para parar el juego */
function revisarVidas(){
        if(vidasEnemigo == 0){
            crearMensajeFinal('✨FELICITACIONES G A N A S T E!! ✨')
        } else if(vidasJugador == 0){
            crearMensajeFinal('Lo siente, perdiste ☹')
        }
}

/* Función que permite enviar el mensaje final de la partida al HTML */
function crearMensajeFinal(resultadoFinal){
    let sectioMensaje = document.getElementById('mensajes')
    let parrafoFinal = document.createElement('p')
    
    parrafoFinal.innerHTML = resultadoFinal
    sectioMensaje.appendChild(parrafoFinal)

    let botonFuego=document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua=document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra=document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar=document.getElementById('reiniciar')
    sectionReiniciar.style.display='block'

}

function reiniciarJuego(){
    location.reload()
}
/* Crear mascota aleatoria para el enemigo */
function aleatorio(min,max){
    return Math.floor(Math.random()* (max - min + 1)+min)
}


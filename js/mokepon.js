const sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
const sectionReiniciar=document.getElementById('reiniciar') 
const btnMascota = document.getElementById('boton-mascota')
const botonFuego=document.getElementById('boton-fuego')
const botonAgua=document.getElementById('boton-agua')
const botonTierra=document.getElementById('boton-tierra')
const botonReiniciar=document.getElementById('boton-reiniciar')
const sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectioMensaje = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataques-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-enemigo')

let mokepones=[]
let ataqueJugador
let ataqueEnemigo
let resultado
let vidasJugador = 3
let vidasEnemigo = 3

window.addEventListener('load', iniciarJuego)

class Mokepon{
    constructor(nombre,foto,vida){
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
    }
}

let hipodoge=new Mokepon('Hipodoge','./imagenes/hipodoge.webp',5)
let capipepo=new Mokepon('Capipepo','./imagenes/capipepo.webp',5)
let ratigueya=new Mokepon('Ratigueya','./imagenes/ratigueya.webp',5)


mokepones.push(hipodoge, capipepo, ratigueya)
console.log(mokepones)
/* Carga los elementos del HTML */
function iniciarJuego(){
    sectionReiniciar.style.display='none'
    sectionSeleccionarAtaque.style.display='none'
    btnMascota.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

/* Esta funcion permite saber que mascota eligió el jugador */
function seleccionarMascotaJugador(){ 
    sectionSeleccionarAtaque.style.display='flex'  
    sectionSeleccionarMascota.style.display='none'
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

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectioMensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
   
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)


}

/* Función que permite verificar el resultado del combate entre el jugador y el enemigo */
function combate(){
   
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
            crearMensajeFinal('Lo siento, perdiste ☹')
        }
}

/* Función que permite enviar el mensaje final de la partida al HTML */
function crearMensajeFinal(resultadoFinal){
        
    sectioMensaje.innerHTML = resultadoFinal
        botonFuego.disabled = true
        botonAgua.disabled = true
        botonTierra.disabled = true
        sectionReiniciar.style.display='block'

}

function reiniciarJuego(){
    location.reload()
}
/* Crear mascota aleatoria para el enemigo */
function aleatorio(min,max){
    return Math.floor(Math.random()* (max - min + 1)+min)
}


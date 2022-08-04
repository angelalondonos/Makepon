const sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
const sectionReiniciar=document.getElementById('reiniciar') 
const btnMascota = document.getElementById('boton-mascota')
const botonReiniciar=document.getElementById('boton-reiniciar')
const sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectioMensaje = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataques-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-enemigo')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let botonFuego 
let botonAgua
let botonTierra
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let vidasJugador = 3
let vidasEnemigo = 3

window.addEventListener('load', iniciarJuego)

class Mokepon{
    constructor(nombre,foto,vida){
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques=[]
    }
}

let hipodoge=new Mokepon('Hipodoge','./imagenes/hipodoge.webp',5)
let capipepo=new Mokepon('Capipepo','./imagenes/capipepo.webp',5)
let ratigueya=new Mokepon('Ratigueya','./imagenes/ratigueya.webp',5)

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

mokepones.push(hipodoge,capipepo,ratigueya)


/* Carga los elementos del HTML */
function iniciarJuego(){
    sectionReiniciar.style.display='none'
    sectionSeleccionarAtaque.style.display='none'

    mokepones.forEach((mokepon) =>{
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} /> 
        <label class="tarjeta-mokepon" for=${mokepon.nombre}>
            <img src=${mokepon.foto}>
            <p>${mokepon.nombre}</p>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
        inputHipodoge = document.getElementById('Hipodoge')
        inputCapepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
    })

    btnMascota.addEventListener('click', seleccionarMascotaJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

/* Esta funcion permite saber que mascota eligió el jugador */
function seleccionarMascotaJugador(){ 
    sectionSeleccionarAtaque.style.display='flex'  
    sectionSeleccionarMascota.style.display='none'

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML= inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }else if(inputCapepo.checked){
        spanMascotaJugador.innerHTML= inputCapepo.id
        mascotaJugador = inputCapepo.id
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML= inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else {
        alert("Selecciona una mascota")
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
} 

function  extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) =>{
        ataquesMokepon = `
        <button class="boton-ataque" id=${ataque.id}>${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
   

    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
}

/* Esta funcion permite saber que mascota eligió el enemigo */
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0,mokepones.length -1)
        spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
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
    let ataqueAleatorio = aleatorio(0,mokepones.length -1)
    
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
            crearMensajeFinal('✨Felicitaciones G A N A S T E!! ✨')
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


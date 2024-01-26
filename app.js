let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asigarTextoElemento(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return;
}
console.log(intentos);
function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   if(numeroDeUsuario === numeroSecreto){// el triple igula sirve para comparar el dato mas el tipo de dato
    asigarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1)? 'vez' : 'Veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled')
} else{
    //El usuario no acerto.
    if (numeroDeUsuario > numeroSecreto){
        asigarTextoElemento('p','El número secreto es menor');
    } else{
        asigarTextoElemento('p','El número secreto es mayor');
    }
    intentos ++;
    limpiarCaja();
   }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ""
    
}

function GenerarNumeroSecretro() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    // si ya sorteamos todos los números 
    if(listaNumerosSorteados.length == numeroMaximo){
        asigarTextoElemento('p','Ya se sortearon todo los números posibles')

    }else{
    //Si el número esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
         return GenerarNumeroSecretro();

    } else{
        listaNumerosSorteados.push(numeroGenerado)// se esta agreando el número generado a lista para que este no lo vuelva a generar.
        return numeroGenerado
    }
}
}

function condicionesIniciales() {
    asigarTextoElemento('h1','Bienvenido al juego secreto');
    asigarTextoElemento('P',`Digite un número de 1 al ${numeroMaximo}`);
    numeroSecreto = GenerarNumeroSecretro();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de inicio (intervalo de número)
    //Generar número aleatorio
    //Inicializar el número de intento
    condicionesIniciales();
    //desabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales()


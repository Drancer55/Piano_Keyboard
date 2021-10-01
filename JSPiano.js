//Bienvenida
let friend = prompt ("Para comenzar introduce tu nombre: ")
alert ("Bienvenido " + friend + ", gracias por utilizar nuestra herramienta de aprendizaje musical. \nUiliza el boton derecho de tu mouse para tocar las notas musicales en pantalla o usa los botones especificados del teclado de tu computadora para emitir el sonido correspondiente.")

//Login

/*alert("Bienvenido al teclado musical en pantalla, para comenzar introduce tu nombre de usuario o especifica si eres el profesor")

let user0 = prompt ("Usuario: ");
let paswrd0 = prompt ("Contraseña: ");

function entrar() {
    var user = "Oscar";
    var paswrd = 12345678;
    if (user0 == user && paswrd0 == paswrd) {
        document.hidden = false;
        alert ("Acceso denegado u.u")
    } else {
        alert ("¡¡Bienvenido!!\n Para tocar el sonido correspondiente a cada nota musical puedes apretar con el boton izquierdo de tu mouse la tecla en pantalla o utiliza el teclado de tu computadora (cada nota corresponde a los botones en pantalla del teclado de tu computadora).")
    }
}
*/

//Arrays que representan el nombre de cada tecla de la computadora en orden a la aparición de sonido en pantalla
const WHITE_KEYS = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', "u", 'i', 'o', 'p', 'Dead', '+', 'Enter', '<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', 'Shift', 'End', 'Control', 'Alt']
console.log(WHITE_KEYS)
const BLACK_KEYS = ['1', '2', '4', '5', '6', '8', '9', "'", '¡', 'Backspace', 'a', 's', 'f', 'g', 'h', 'k', 'l', 'ñ', 'ç', 'PageDown']
console.log(BLACK_KEYS)

//Variable= teclas \ seleccionar todas las clases ".key"
const keys = document.querySelectorAll('.key');
console.log(keys)
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

//reproducir sonido para cada tecla musical en la que se ejecuta la función "click" del mouse
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
})

document.addEventListener('keydown', e => {                         //keydow (al presionar responde el evento)
    if (e.repeat) return                                            //Evita que al mantenerse oprimido el boton (keyDown) se reproduzca infinidad de veces, si se mantiene oprimido sólo sonará una vez. 
    const key = e.key                                               //Corresponde a la letra en el computador con la nota descrita en el Array correspondiente a White note o black note
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)                   //obtiene el index desde el array
    const blackKeyIndex = BLACK_KEYS.indexOf(key)
    
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])      //Determina exactamente la posición en el Index-array para ser ejecutada tomando en cuenta el nombre del keyboard asignado
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
    console.log(whiteKeys)
    console.log(blackKeys)
})

//función para mandar a llamar al archivo de audio 
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;                                      //esto permite que el archivo se reproduzca desde 0 en cada "teclazo o click" sin esperar a que termine de reproducirse
    noteAudio.play();
    key.classList.add('active');                                   //permite cambiar de color desde CCS denotando qué nota es tocada
    noteAudio.addEventListener('ended', () => {                    //aquí el sonido al terminar de reproducirse cambia el color a su posición original desde CCS
        key.classList.remove('active')
    })
}


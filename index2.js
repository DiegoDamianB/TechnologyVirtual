/*****Registro*****/
//Validamos que los campos del Registro no esten vacios
//Creamos un objeto para validar todos los campos
var camposRegistro = {
    nombre: '',
    correo: '',
    user: '',
    passw: ''
}

function leerTexto(evento) {
    camposRegistro[evento.target.id] = evento.target.value;
    console.table(camposRegistro);
}

function mostrarMensajes(mensaje, banderas) {
    const bloquess = document.createElement('p');
    bloquess.textContent = mensaje;
    if (banderas === 'Correcto') {
        bloquess.classList.add('mensajeOkk');
    } else {
        bloquess.classList.add('mensajeErrorSegundo');
    }
    registro.appendChild(bloquess);
    setTimeout(function() {
        bloquess.remove();
    }, 2000);
}

function validarRegistro(evento) {
    evento.preventDefault();
    //Accedemos a los valores del objeto con camposIniciarSesion.email, camposIniciarSesion.pw
    //Validamos que los campos no esten en blanco
    if (camposRegistro.nombre === '' || camposRegistro.correo === '' || camposRegistro.user === '' || camposRegistro.passw === '') {
        mostrarMensajes('*Todos los campos son obligatorios.', 'Errorr');
        return;
    }
    mostrarMensajes('Enviando información de registro.', 'Correcto');
}


//Obtenemos la referencia de todos los elementos del Registro que deseamos validar
const nombre = document.getElementById('nombres');
const correo = document.querySelector('#correo');
const user = document.getElementById('user');
const passw = document.querySelector('#passw');
const registro = document.querySelector('.formulario__register')

//Ahora estar pendiente de los eventos sobre los cuales queremos realizar una accion una vez que ocurran
nombre.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
user.addEventListener('input', leerTexto);
passw.addEventListener('input', leerTexto);

//Ahora estamos pendiente del evento submit de REGISTRO
registro.addEventListener('submit', validarRegistro);


//******Fin de REGISTRARSE******/

/***INICIAR SESION****/

//Validamos que los campos de Iniciar Sesion no esten vacios
//Creamos un objeto para validar todos los campos
var camposIniciarSesion = {
    email: '',
    pw: ''
}

function leerTexto(evento) {
    camposIniciarSesion[evento.target.id] = evento.target.value;
    console.table(camposIniciarSesion);
}

//2da forma
function mostrarMensaje(mensaje, bandera) {
    const bloques = document.createElement('p');
    bloques.textContent = mensaje;
    //Dependiendo de la condicional se mostrara con la clase error u ok
    if (bandera === 'Ok') {
        bloques.classList.add('mensajeOk');
    } else {
        bloques.classList.add('mensajeError');
    }
    login.appendChild(bloques);
    setTimeout(function() {
        bloques.remove();
    }, 3000);
}

function validarLogin(evento) {
    evento.preventDefault();
    //Accedemos a los valores del objeto con camposIniciarSesion.email, camposIniciarSesion.pw
    //Validamos que los campos no esten en blanco
    if (camposIniciarSesion.email === '' || camposIniciarSesion.pw === '') {
        mostrarMensaje('*Todos los campos son obligatorios', 'Error');
        //Luego de esto no deberia continuar, entonces salgo de la funcion
        return;
    }
    mostrarMensaje('Iniciando sesión.', 'Ok');
}

//Obtenemos la referencia de todos los elementos de Iniciar Sesion que deseamos validar
const mail = document.querySelector('#email');
const pw = document.querySelector('#pw');
const login = document.querySelector('.formulario__login');

//Ahora estar pendiente de los eventos sobre los cuales queremos realizar una accion una vez que ocurran
mail.addEventListener('input', leerTexto);
pw.addEventListener('input', leerTexto);

//Ahora estamos pendiente del evento submit del INICIAR SESION
login.addEventListener('submit', validarLogin);
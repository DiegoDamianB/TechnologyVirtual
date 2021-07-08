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

function mostrarError(mensaje) {
    //Creo el elemento donde se coloca el mensaje de error para que el usuario lo vea
    const error = document.createElement('p');
    //Agrego el mensaje en el elemento
    error.textContent = mensaje;
    //Agregamos una clase para luego darle estilo desde nuestro css
    error.classList.add('mensajeErrorSegundo');
    //Agrego el bloque a mi html al final del formulario
    registro.appendChild(error);

    //Quitamos el mensaje de error luego de 5 segundos
    setTimeout(function() {
        error.remove();
    }, 3000);
}

function validarRegistro(evento) {
    evento.preventDefault();
    //Accedemos a los valores del objeto con camposIniciarSesion.email, camposIniciarSesion.pw
    //Validamos que los campos no esten en blanco
    if (camposRegistro.nombre === '' || camposRegistro.correo === '' || camposRegistro.user === '' || camposRegistro.passw === '') {
        mostrarError('Todos los campos son obligatorios');
        //Luego de esto no deberia continuar, entonces salgo de la funcion
        return;
    }
    console.log('Enviando registro');
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

function mostrarMensajeError(mensaje) {
    //Creo el elemento donde se coloca el mensaje de error para que el usuario lo vea
    const bloqueError = document.createElement('p');
    //Agrego el mensaje en el elemento
    bloqueError.textContent = mensaje;
    //Agregamos una clase para luego darle estilo desde nuestro css
    bloqueError.classList.add('mensajeError');
    //Agrego el bloque a mi html al final del formulario
    login.appendChild(bloqueError);

    //Quitamos el mensaje de error luego de 5 segundos
    setTimeout(function() {
        bloqueError.remove();
    }, 3000);
}

function validarLogin(evento) {
    evento.preventDefault();
    //Accedemos a los valores del objeto con camposIniciarSesion.email, camposIniciarSesion.pw
    //Validamos que los campos no esten en blanco
    if (camposIniciarSesion.email === '' || camposIniciarSesion.pw === '') {
        mostrarMensajeError('Todos los campos son obligatorios');
        //Luego de esto no deberia continuar, entonces salgo de la funcion
        return;
    }
    console.log('Iniciando sesión');
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
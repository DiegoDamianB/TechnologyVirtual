/*****REGISTRARSE*****/
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


//Obtenemos la referencia de todos los elementos del Registro que deseamos validar
const nombre = document.getElementById('nombres');
const correo = document.querySelector('#correo');
const user = document.getElementById('user');
const passw = document.querySelector('#passw');

//Ahora estar pendiente de los eventos sobre los cuales queremos realizar una accion una vez que ocurran
nombre.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
user.addEventListener('input', leerTexto);
passw.addEventListener('input', leerTexto);

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


//Obtenemos la referencia de todos los elementos de Iniciar Sesion que deseamos validar
const mail = document.querySelector('#email');
const pw = document.querySelector('#pw');

//Ahora estar pendiente de los eventos sobre los cuales queremos realizar una accion una vez que ocurran
mail.addEventListener('input', leerTexto);
pw.addEventListener('input', leerTexto);
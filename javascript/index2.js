//Validamos que los campos del formulario no esten vacios
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


//Obtenemos la referencia de todos los elementos del formulario que deseamos validar
const nombre = document.getElementById('nombres');
const correo = document.querySelector('#correo');
const user = document.getElementById('user');
const passw = document.querySelector('#passw');

//Ahora estar pendiente de los eventos sobre los cuales queremos realizar una accion una vez que ocurran
nombre.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
user.addEventListener('input', leerTexto);
passw.addEventListener('input', leerTexto);
function imprimirEnConsola() {
    console.log('La página cargó corretamente');
}

window.addEventListener('load', imprimirEnConsola);

window.addEventListener('scroll', function() {
    console.log('scrolling...');
});

//Busco el elemento cuya clase es .Entrar
/*const botonEntrar = document.querySelector('.Entrar');
console.log(botonEntrar);
botonEntrar.addEventListener('click', function(miEvento) {
    console.log(miEvento);
    miEvento.preventDefault();
    console.log('Iniciando sesión');
})

const botonRegistrarse = document.querySelector('.Registrarse');
console.log(botonRegistrarse);

botonRegistrarse.addEventListener('click', function(tuEvento) {
    console.log(tuEvento);
    tuEvento.preventDefault(); //Prevenir que haga accion por defecto, en caso tenga una accion por defecto
    console.log('Enviando datos de registro.');
});*/

//Obtener el contenido de un elemento (REGISTRARSE)
//guardamos la referencia del elemento con el que queremos trabajar
const nombres = document.querySelector('#nombres');
nombres.addEventListener('change', function() {
    console.log("Escribiendo...");
});
nombres.addEventListener('input', function(evento) {
    console.log(evento);
    console.log("Escribiendo...");
});

//Obtener el contenido de un elemento (INICIAR SESION)
//guardamos la referencia del elemento con el que queremos trabajar
const email = document.querySelector('#email');
email.addEventListener('change', function() {
    console.log("Escribiendo...");
});
email.addEventListener('input', function(evento) {
    console.log(evento);
    console.log("Escribiendo...");
});
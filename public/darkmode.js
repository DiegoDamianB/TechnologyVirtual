//IMPLEMENTAR DARKMODE
function activarDarkMode() {
    //Body referencia (background color)
    const fondoWeb = document.body;
    const mainContenedor = document.querySelector('main.contenedor'); //Referencia a un <main class='contenedor'>...</main>

    fondoWeb.classList.toggle('dark-mode');
    //mainContenedor.classList.toggle('dark-mode');
}

//Referencia al elemento
const botonDarkMode = document.querySelector('.boton-dark-mode');
botonDarkMode.addEventListener('click', activarDarkMode);
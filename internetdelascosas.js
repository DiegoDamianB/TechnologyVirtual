function imprimirEnConsola() {
    console.log('La página cargó corretamente');
}

window.addEventListener('load', imprimirEnConsola);

window.addEventListener('scroll', function() {
    console.log('scrolling...');
});
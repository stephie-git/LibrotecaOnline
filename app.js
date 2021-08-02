let nombreUsuario = prompt('Por favor, ingrese su nombre :)')


function compraRealizada(precioLibro){
    let cantidadLibros = prompt('¿Cuantas unidades desea adquirir?')
    let precioFinal = precioLibro * cantidadLibros;
    let valorIva = 1.21;


    alert(`${nombreUsuario}, el precio final es: ${precioFinal * valorIva}`);
 }
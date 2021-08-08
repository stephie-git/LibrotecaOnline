let nombreUsuario = prompt('Por favor, ingrese su nombre :)')

let valorIva = 1.21;



function compraRealizada(precioLibro){
    let cantidadLibros = prompt('¿Cuantas unidades desea adquirir?' );
    let precioFinal = precioLibro * cantidadLibros;
    let direccionCliente = prompt('Por favor indicar su direccion');
    let nuevaCompra = new Compra(nombreUsuario, precioFinal, cantidadLibros, direccionCliente);


    alert(`Hola ${nuevaCompra.cliente}, sus ${nuevaCompra.productos} libro/s seran despachados a ${nuevaCompra.direccion}, y el valor es de ${nuevaCompra.precioFinal}. \n El precio con IVA es: ${nuevaCompra.calculoIva()}`);
    console.log(nuevaCompra)
    }

 class Compra{
    constructor(cliente, precioFinal, cantidadProductos, direccionEnvio){
        this.cliente = cliente;
        this.precioFinal = precioFinal;
        this.productos = cantidadProductos;
        this.direccion = direccionEnvio;
     }
     calculoIva(){
        let iva = this.precioFinal = this.precioFinal * this.productos * valorIva; 
        return iva
     }
 }






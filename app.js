let arrayLibros= []; 
let arrayCompras= [];
let nombreUsuario = prompt('Por favor, ingrese su nombre :)')

let valorIva = 1.21;



function compraRealizada(precioLibro){
    let cantidadLibros = prompt('¿Cuantas unidades desea adquirir?' );
    let precioFinal = precioLibro * cantidadLibros;
    let direccionCliente = prompt('Por favor indicar su direccion');
    let nuevaCompra = new Compra(nombreUsuario, precioFinal, cantidadLibros, direccionCliente);
   arrayCompras.push(nuevaCompra)
   
   nuevaCompra.infoCompra()
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
     infoCompra(){
      alert(`Hola ${this.cliente}, sus ${this.productos} libro/s seran despachados a ${this.direccion}, y el valor es de ${this.precioFinal}. \n El precio con IVA es: ${this.calculoIva()}`);
      console.log(this)
     }
 }

 class Libro{
    constructor(titulo, autor, editorial, genero)
    {
       this.titulo = titulo;
       this.autor = autor;
       this.editorial = editorial;
       this.genero = genero;
    }
 }


 function newBook(){ //Boton que utilizaria el admin de la pagina para añadir libros al catalogo de venta.
   let tituloLibro = prompt('Indique el titulo del libro')
   let autorLibro = prompt('Indique el autor del libro')
   let editorialLibro = prompt('Indique la editorial del libro')
   let generoLibro = prompt('Indique el titulo del libro')

   let libroCreado = new Libro(tituloLibro, autorLibro, editorialLibro, generoLibro);
   arrayLibros.push(libroCreado)
}

 let nuevoLibro1 = new Libro('Despues', 'Stephen King', 'Santillana', 'Terror');
 let nuevoLibro2 = new Libro('La tia cosima', 'Florencia Bonelli', 'Suma', 'drama');
 let nuevoLibro3 = new Libro('El hogar de las niñas indeseadas', 'Joanna Goodman', 'Las rosas', 'drama');
 let nuevoLibro4 = new Libro('Asesino de brujas', 'Shelby Mahurin', 'Los hijos de rey', 'suspenso');

 
 arrayLibros.push(nuevoLibro1, nuevoLibro2, nuevoLibro3, nuevoLibro4);
 arrayLibros.sort();
 
 console.log(arrayLibros);








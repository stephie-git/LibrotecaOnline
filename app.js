let prueba = document.getElementById('divPrueba');
let parrafo = document.createElement('p');
parrafo.innerHTML = 'Compra con un solo click y recibilos desde tu casa!!'
prueba.appendChild(parrafo);
prueba.classList.add('estilosDiv');

let valorIva = 1.21;

let arrayCompras= [];
arrayLibros=[
   {
      titulo:'Después', 
      parrafo:'En ocasiones; para crecer debes vencer a tus demonios. El rey del terror regresa con una nueva e inolvidable novela. N° 1 en la lista de más vendidos del New York Times. (...)',
      autor:'Stephen King',
      imagen:'images/Stephen King.jpg',
      editorial: 'Puerto de palos',
      genero:'terror',
      precio: '700'
   },
   {
      titulo: 'La tia Cosima',
      parrafo:'Cósima; un nombre para recordar. pepiUna historia de cómo el amor vence al odio. La nueva novela de Florencia Bonelli; la escritora argentina más leída y admirada de América Latina; vuelve con una historia contemporánea donde coexisten la profesión; la amistad; el amor y un pasado doloroso que; (...)',
      autor: 'Florencia Bonelli',
      imagen: "images/la tia cosi.jpg",
      editorial: 'Suma',
      genero: 'Romance',
      precio: '600'

   },
   {
      titulo: 'El hogar de las niñas indeseadas',
      parrafo: 'Un estudio de cómo el amor persiste incluso en los momentos más difíciles. Una novela profunda y significativa; que captura la atención del lector hasta el final. Booklist Philomena y El tren de los huérfanos confluyen en esta desgarradora historia sobre el lazo irrompible entre una madre y s (...)',
      autor: 'Joanna Goodman',
      imagen: "images/El hogar de las niñas.jpg",
      editorial: 'ABC',
      genero: 'Drama',
      precio: '570'
   },

   {
      titulo: 'Asesino de brujas',
      parrafo: 'La esperada secuela del éxito de ventas del New York Times: Asesino de brujas. La bruja blanca. Los riesgos son mayores. brujas son más letales. Y el romance es aún más intenso. (...)',
      autor: 'Shelby Mahurin',
      imagen: "images/asesino de brujas.jpg",
      editorial: 'Blend',
      genero: 'Suspenso',
      precio: '900'
   },
];

let nombreUsuario = prompt('Por favor, ingrese su nombre :)')


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
    constructor(titulo, autor, editorial, genero, imagen)
    {
       this.titulo = titulo;
       this.autor = autor;
       this.editorial = editorial;
       this.genero = genero;
       this.imagen = imagen;
    }
 }


 function newBook(){ //Boton que utilizaria el admin de la pagina para añadir libros al catalogo de venta.
   let tituloLibro = prompt('Indique el titulo del libro')
   let autorLibro = prompt('Indique el autor del libro')
   let editorialLibro = prompt('Indique la editorial del libro')
   let generoLibro = prompt('Indique el titulo del libro')

   let libroCreado = new Libro(tituloLibro, autorLibro, editorialLibro, generoLibro, imagen);
   arrayLibros.push(libroCreado)
}

 arrayLibros.sort();
 
 function crearTarjetas(libros){
    let contenedorProductos = document.getElementById('productos');

    libros.forEach(element =>{
      console.log(element)
      let divTarjeta = document.createElement('div');
      let tapaLibros = document.createElement('img');
      let tituloLibros = document.createElement('h4');
      let botonCompra = document.createElement('button');
      let parrafoLibros = document.createElement('p');
      divTarjeta.classList.add('card');

      tapaLibros.src = element.imagen;
      tituloLibros.innerHTML = element.titulo;
      parrafoLibros.innerHTML = element.parrafo;
      botonCompra.innerHTML = 'Comprar'
     

      divTarjeta.append(tapaLibros, tituloLibros, parrafoLibros, botonCompra);
      contenedorProductos.appendChild(divTarjeta);

      botonCompra.addEventListener('click', event=>compraRealizada(element.precio))
   })
}



crearTarjetas(arrayLibros)


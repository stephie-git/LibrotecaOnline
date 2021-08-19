let prueba = document.getElementById('divPrueba');
let parrafo = document.createElement('p');
parrafo.innerHTML = 'Compra con un solo click y recibilos desde tu casa!!'
prueba.appendChild(parrafo);
prueba.classList.add('estilosDiv');
let userName = document.getElementById('userName')
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

   {
      titulo: 'Borges y yo',
      parrafo: 'Jay Parini era un joven poeta y estudiante de literatura estadounidense cuando conoció a Jorge Luis Borges. El encuentro fortuito con el formidable escritor que narran estas páginas cambió para siempre su vida y su forma de ver la literatura.',
      autor: 'Jay Parini',
      imagen: "images/borges y yo.jpg",
      editorial: 'emece',
      genero: 'drama',
      precio: '890'
   },
   {
      titulo: 'Kaidu',
      parrafo: '¿Qué sucede cuando Juan le presenta a Aína su singular perro callejero? Kaidú, un compañero no humanizado, la cautiva a primera vista y acorta la distancia entre los tres. Ella reconoce con sorpresa el deseo de compartir más tiempo con él; en poco tiempo, la pasión se multiplica.',
      autor: 'Paula Perez Alonso',
      imagen: "images/Kaidu.jpg",
      editorial: 'tusQuets',
      genero: 'Novela Contemporanea',
      precio: '1000'

   },

   {
      titulo: 'Gotico',
      parrafo: 'Tras recibir una extraña carta de su prima recién casada, Noemí Taboada se dirige a High Place, una casa en el campo en México, sin saber qué encontrará allí. Noemí no parece tener dotes de salvadora: es glamurosa, más acostumbrada a asistir a cócteles que a las tareas de detective...',
      autor: 'Silvia Moreno-Garcia',
      imagen: "images/gotico.jpg",
      editorial: 'The guardian',
      genero: 'Terror',
      precio: '1200'
   },

   {
      titulo: 'Merca',
      parrafo: '¿Es Merca una novela sobre el odio (hipótesis interesante) o sobre la cocaína (bastante menos)? No: el odio y la cocaína son el combustible que sostiene el ritmo de la voz narrativa de Johnny, una verborrea trepidante y paranoica... ',
      autor: 'Pablo Escudero',
      imagen: "images/Merca.jpg",
      editorial: 'Emece',
      genero: 'Novela Literaria',
      precio: '1200'
   },

   {
      titulo: 'La desconocida',
      parrafo: 'Para saber quién soy, primero necesitas conocer mi historia. Porque no soy Nora, esa chica normal, con una vida normal en un vecindario normal…',
      autor: 'Milu Avellaneda',
      imagen: "images/la desconocida.jpg",
      editorial: 'Cross Books',
      genero: 'Thriller',
      precio: '1100'
   },
   {
      titulo: 'Abzurdah',
      parrafo: 'Una muchacha camina al borde del abismo. Cielo Latini, niña precoz, sensible y creativa, educada en una familia “normal”, siempre una enfant terrible fascinada por el arte y por la muerte, cuenta cómo su adolescencia fue un descenso a los infiernos.',
      autor: 'Cielo Latini',
      imagen: "images/Abzurdah.jpg",
      editorial: 'Las Rosas',
      genero: 'Drama',
      precio: '700'

   },

   {
      titulo: 'La voz ausente',
      parrafo: 'Las cosas no siempre son como parecen, y cuanto más cerca aparenta estar el mundo de cierta calma, mayor suele ser la tormenta que se gesta en lo inespe - rado.',
      autor: 'Gabriel Rolon',
      imagen: "images/la vos ausente.jpg",
      editorial: 'Emece',
      genero: 'Drama',
      precio: '900'
   },
   {
      titulo: 'Los gatos pardos',
      parrafo: 'Tres personajes viven una noche de San Juan en Murcia que difícilmente van a olvidar. Jacinto es un guardaespaldas mexicano que trabaja para don Jorge y que tiene que encargarse, mientras su patrón celebra una gran fiesta, de saldar cuentas con quienes han matado a un protegido.',
      autor: 'Gines Sanchez',
      imagen: "images/los gatos pardos.jpg",
      editorial: 'TusQuets',
      genero: 'Novela historica',
      precio: ''
   }
];

let nombreUsuario;

function setNombreUsuario(){
   nombreUsuario = prompt('Por favor, ingrese su nombre :)');
   if(nombreUsuario != null || ""){
      userName.innerHTML = `Bienvenido a Libroteca, ${nombreUsuario}!`
   }else{
      userName.innerHTML = `Bienvenido a Libroteca!`
   }
}

setNombreUsuario()

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



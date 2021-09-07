let prueba = document.getElementById('divPrueba');
let parrafo = document.createElement('p');
parrafo.innerHTML = 'Compra con un solo click y recibilos desde tu casa!!'
prueba.appendChild(parrafo);
prueba.classList.add('estilosDiv');
let userName = document.getElementById('userName')
let userNameInput = document.getElementById('userNameInput');
let formSubmit = document.getElementById('formSubmit');
let valorIva = 1.21;
userName.innerHTML = `Bienvenido a Libroteca!`
formSubmit.addEventListener('click', setNombreUsuario);
let nombreUsuario;

function setNombreUsuario(){
   if(userNameInput.value == null || undefined){
      return
   }else{
     userName.innerHTML = `Bienvenido a Libroteca, ${userNameInput.value}!`;
     nombreUsuario = userNameInput.value;
   }
}

let arrayCompras= [];

let arrayLibros=[
   {
      titulo:'Después', 
      parrafo:'En ocasiones; para crecer debes vencer a tus demonios. El rey del terror regresa con una nueva e inolvidable novela. N° 1 en la lista de más vendidos del New York Times. (...)',
      autor:'Stephen King',
      imagen:'images/Stephen King.jpg',
      editorial: 'Puerto de palos',
      genero:'Terror',
      precio: '700',
      categoria: 'Nuevos'
   },
   {
      titulo: 'La tia Cosima',
      parrafo:'Cósima; un nombre para recordar. pepiUna historia de cómo el amor vence al odio. La nueva novela de Florencia Bonelli; la escritora argentina más leída y admirada de América Latina; vuelve con una historia contemporánea donde coexisten la profesión; la amistad; el amor y un pasado doloroso que; (...)',
      autor: 'Florencia Bonelli',
      imagen: "images/la tia cosi.jpg",
      editorial: 'Suma',
      genero: 'Novela',
      precio: '600',
      categoria: 'Nuevos'

   },
   {
      titulo: 'El hogar de las niñas indeseadas',
      parrafo: 'Un estudio de cómo el amor persiste incluso en los momentos más difíciles. Una novela profunda y significativa; que captura la atención del lector hasta el final. Booklist Philomena y El tren de los huérfanos confluyen en esta desgarradora historia sobre el lazo irrompible entre una madre y s (...)',
      autor: 'Joanna Goodman',
      imagen: "images/El hogar de las niñas.jpg",
      editorial: 'ABC',
      genero: 'Drama',
      precio: '570',
      categoria: 'Usados'
   },

   {
      titulo: 'Asesino de brujas',
      parrafo: 'La esperada secuela del éxito de ventas del New York Times: Asesino de brujas. La bruja blanca. Los riesgos son mayores. brujas son más letales. Y el romance es aún más intenso. (...)',
      autor: 'Shelby Mahurin',
      imagen: "images/asesino de brujas.jpg",
      editorial: 'Blend',
      genero: 'Terror',
      precio: '900',
      categoria: 'Nuevos'
   },

   {
      titulo: 'Borges y yo',
      parrafo: 'Jay Parini era un joven poeta y estudiante de literatura estadounidense cuando conoció a Jorge Luis Borges. El encuentro fortuito con el formidable escritor que narran estas páginas cambió para siempre su vida y su forma de ver la literatura.',
      autor: 'Jay Parini',
      imagen: "images/borges y yo.jpg",
      editorial: 'emece',
      genero: 'Drama',
      precio: '890',
      categoria: 'Usados'
   },
   {
      titulo: 'Kaidu',
      parrafo: '¿Qué sucede cuando Juan le presenta a Aína su singular perro callejero? Kaidú, un compañero no humanizado, la cautiva a primera vista y acorta la distancia entre los tres. Ella reconoce con sorpresa el deseo de compartir más tiempo con él; en poco tiempo, la pasión se multiplica.',
      autor: 'Paula Perez Alonso',
      imagen: "images/Kaidu.jpg",
      editorial: 'tusQuets',
      genero: 'Novela',
      precio: '1000',
      categoria: 'Nuevos'

   },

   {
      titulo: 'Gotico',
      parrafo: 'Tras recibir una extraña carta de su prima recién casada, Noemí Taboada se dirige a High Place, una casa en el campo en México, sin saber qué encontrará allí. Noemí no parece tener dotes de salvadora: es glamurosa, más acostumbrada a asistir a cócteles que a las tareas de detective...',
      autor: 'Silvia Moreno-Garcia',
      imagen: "images/gotico.jpg",
      editorial: 'The guardian',
      genero: 'Terror',
      precio: '1200',
      categoria: 'Nuevos'
   },

   {
      titulo: 'Merca',
      parrafo: '¿Es Merca una novela sobre el odio (hipótesis interesante) o sobre la cocaína (bastante menos)? No: el odio y la cocaína son el combustible que sostiene el ritmo de la voz narrativa de Johnny, una verborrea trepidante y paranoica... ',
      autor: 'Pablo Escudero',
      imagen: "images/Merca.jpg",
      editorial: 'Emece',
      genero: 'Novela',
      precio: '1200',
      categoria: 'Nuevos'
   },

   {
      titulo: 'La desconocida',
      parrafo: 'Para saber quién soy, primero necesitas conocer mi historia. Porque no soy Nora, esa chica normal, con una vida normal en un vecindario normal…',
      autor: 'Milu Avellaneda',
      imagen: "images/la desconocida.jpg",
      editorial: 'Cross Books',
      genero: 'Novela',
      precio: '1100',
      categoria: 'Usados'
   },
   {
      titulo: 'Abzurdah',
      parrafo: 'Una muchacha camina al borde del abismo. Cielo Latini, niña precoz, sensible y creativa, educada en una familia “normal”, siempre una enfant terrible fascinada por el arte y por la muerte, cuenta cómo su adolescencia fue un descenso a los infiernos.',
      autor: 'Cielo Latini',
      imagen: "images/Abzurdah.jpg",
      editorial: 'Las Rosas',
      genero: 'Drama',
      precio: '700',
      categoria: 'Usados'

   },

   {
      titulo: 'La voz ausente',
      parrafo: 'Las cosas no siempre son como parecen, y cuanto más cerca aparenta estar el mundo de cierta calma, mayor suele ser la tormenta que se gesta en lo inespe - rado.',
      autor: 'Gabriel Rolon',
      imagen: "images/la vos ausente.jpg",
      editorial: 'Emece',
      genero: 'Drama',
      precio: '900',
      categoria: 'Nuevos'
   },
   {
      titulo: 'Los gatos pardos',
      parrafo: 'Tres personajes viven una noche de San Juan en Murcia que difícilmente van a olvidar. Jacinto es un guardaespaldas mexicano que trabaja para don Jorge y que tiene que encargarse, mientras su patrón celebra una gran fiesta, de saldar cuentas con quienes han matado a un protegido.',
      autor: 'Gines Sanchez',
      imagen: "images/los gatos pardos.jpg",
      editorial: 'TusQuets',
      genero: 'Novela',
      precio: '800',
      categoria: 'Usados'
   },

   {
      titulo: 'El arte del Lettering: Amor',
      parrafo: 'Un libro tan práctico como inspirador. Aprende paso a paso cómo dominar una variedad de estilos de lettering, los cuales puedes practicar con hermosas frases de Disney..',
      autor: 'Disney',
      imagen: "images/Princesas.jpg",
      editorial: 'Planeta',
      genero: 'Infantil',
      precio: '800',
      categoria: 'Niños'
   },

   {
      titulo: 'Anna encuentra una amiga',
      parrafo: 'Mucho antes de salvar Arendelle¡Anna buscaba una amiga!Los padres de Anna están de viaje y ella se siente terriblemente sola.',
      autor: 'Disney',
      imagen: "images/Anna.jpg",
      editorial: 'Planeta Junior',
      genero: 'Infantil',
      precio: '900',
      categoria: 'Niños'
   },

   {
      titulo: 'Luca. La novela',
      parrafo: 'Ambientada en una ciudad costera de la Riviera Italiana, la película de Disney y Pixar,',
      autor: 'Disney',
      imagen: "images/Luca.jpg",
      editorial: 'Planeta Junior',
      genero: 'Infantil',
      precio: '900',
      categoria: 'Niños'
   },

   {
      titulo: 'La saga de los distintos 2',
      parrafo: 'En Animalia hay cuatro reinos distintos. Son Reinos que no se conocen entre sí, que ignoran la existencia de los otros. ',
      autor: 'Chanti',
      imagen: "images/La saga de los gatos.jpg",
      editorial: 'Planeta Junior',
      genero: 'Infantil',
      precio: '700',
      categoria: 'Niños'
   },

   {
      titulo: 'Mandalorian',
      parrafo: 'Inspírate en el universo de Star Wars para despertar a tu artista interior.',
      autor: 'Disney',
      imagen: "images/Mandalorian.jpg",
      editorial: 'Planeta Junior',
      genero: 'Infantil',
      precio: '900',
      categoria: 'Niños'
   },

   {
      titulo: 'Soul',
      parrafo: 'El músico Joe Gardner se separa de su cuerpo en el día más importante de su vida.',
      autor: 'Disney',
      imagen: "images/Soul.jpg",
      editorial: 'Planeta Junior',
      genero: 'Infantil',
      precio: '1000',
      categoria: 'Niños'
   },

   {
      titulo: 'Mulan',
      parrafo: 'Los hunos han cruzado la Gran Muralla y su líder Shan-Yu avanza imparable.',
      autor: 'Disney',
      imagen: "images/Mulan.jpg",
      editorial: 'Planeta Junior',
      genero: 'Infantil',
      precio: '800',
      categoria: 'Niños'
   },

   {
      titulo: 'El Principito',
      parrafo: 'El clásico de la literatura, no solo infantil, narra la historia del Principito,',
      autor: 'Antoine De Saint-Exupéry',
      imagen: "images/El Principito.jpg",
      editorial: 'Planeta Lector Argentino',
      genero: 'Infantil',
      precio: '900',
      categoria: 'Niños'
   },

   {
      titulo: 'El Papa Francisco',
      parrafo: 'Sinopsis de Papa Francisco debajo del fuego',
      autor: 'Andrea Tornielli',
      imagen: "images/Papa francisco.jpg",
      editorial: 'PLANETAPT',
      genero: 'Drama',
      precio: '400',
      categoria: 'Usados'
   },

   {
      titulo: 'Isla decepcion',
      parrafo: 'Tras fracasar en el amor y renunciar a un trabajo que odia, Marcela huye de su vida en Santiago para visitar a su padre en Punta Arenas',
      autor: 'Paulina Flores',
      imagen: "images/decepcion.jpg",
      editorial: 'Seix Barral',
      genero: 'Drama',
      precio: '500',
      categoria: 'Usados'
   },

   {
      titulo: 'Transbordo en Moscú',
      parrafo: 'Tras fracasar en el amor y renunciar a un trabajo que odia, Marcela huye de su vida en Santiago para visitar a su padre en Punta Arenas',
      autor: 'Eduardo Mendoza',
      imagen: "images/Moscu.jpg",
      editorial: 'Seix Barral',
      genero: 'Drama',
      precio: '500',
      categoria: 'Usados'
   },

   {
      titulo: 'Los besos',
      parrafo: 'Cuando el amor descubre el sentido más profundo de la vida',
      autor: 'Manuel Vilas',
      imagen: "images/Los besos.jpg",
      editorial: 'Editorial Planeta',
      genero: 'Novela',
      precio: '500',
      categoria: 'Usados'
   },

   {
      titulo: 'Fresas con chocolate',
      parrafo: 'Francesca, una joven argentina que estudia Arquitectura, viaja de intercambio a España y en poco tiempo se atreverá a ir más allá de lo que jamás se había permitido.',
      autor: 'Jazmín Riera',
      imagen: "images/Fresas con chocolate.jpg",
      editorial: 'Editorial Planeta',
      genero: 'Novela',
      precio: '700',
      categoria: 'Nuevos'
   }
];

function compraRealizada(precioLibro){
    let cantidadLibros = prompt('¿Cuantas unidades desea adquirir?' );
    let precioFinal = precioLibro * cantidadLibros;
    let direccionCliente = prompt('Por favor indicar su direccion');
    let nuevaCompra = new Compra(nombreUsuario, precioFinal, cantidadLibros, direccionCliente);
   
   nuevaCompra.infoCompra()

   guardarCompra(nuevaCompra);
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

 //JSON LOCAL STORAGE

 const guardarCompra = (valor) => { 
   let comprasLocal = [];

   if(!localStorage.getItem('Compras')) {
      comprasLocal.push(valor);
      localStorage.setItem('Compras', JSON.stringify(comprasLocal));
   } else {
      comprasLocal = JSON.parse(localStorage.getItem('Compras'));
      comprasLocal.push(valor);
      localStorage.setItem('Compras', JSON.stringify(comprasLocal));
   }
};



 class Libro{
    constructor(titulo, autor, editorial, genero, imagen, categoria)
    {
       this.titulo = titulo;
       this.autor = autor;
       this.editorial = editorial;
       this.genero = genero;
       this.imagen = imagen;
       this.categoria = categoria;
    }
 }

 function crearTarjetas(libros){
    let contenedorProductos = document.getElementById('productos');

    libros.forEach(element =>{
      let divTarjeta = document.createElement('div');
      let tapaLibros = document.createElement('img');
      let tituloLibros = document.createElement('h4');
      let botonCompra = document.createElement('button');
      botonCompra.setAttribute('id', 'botonQuery')
      let parrafoLibros = document.createElement('p');
      divTarjeta.classList.add('card');


      

      tapaLibros.src = element.imagen;
      tituloLibros.innerHTML = element.titulo;
      parrafoLibros.innerHTML = element.parrafo;
      botonCompra.innerHTML = 'Comprar'
     

      divTarjeta.append(tapaLibros, tituloLibros, parrafoLibros, botonCompra);
      contenedorProductos.appendChild(divTarjeta);

      divTarjeta.addEventListener('mouseover', event=> {
         divTarjeta.classList.add('boxColor')
      
      });
      divTarjeta.addEventListener('mouseleave', event=> {
         divTarjeta.classList.remove('boxColor')
      })

      $('#botonQuery').on('click', event=>compraRealizada(element.precio))
      $('#botonQuery').on('mouseover', event=>{
         botonCompra.classList.add('hoverBoton')
      });
      $('#botonQuery').on('mouseleave', event=> {
         botonCompra.classList.remove('hoverBoton')
      })

      
   })
}

crearTarjetas(arrayLibros);

//Filtrado por genero

let librosTerror = arrayLibros.filter(x=>x.genero == 'Terror')
let librosDrama = arrayLibros.filter(x=>x.genero == 'Drama')
let librosNovela = arrayLibros.filter(x=>x.genero == 'Novela')
let librosInfantil = arrayLibros.filter(x=>x.genero == 'Infantil')

let arrayGeneros = ['Todos','Terror', 'Drama', 'Novela', 'Infantil']
let listadoGenero = document.getElementById('listadoGenero')

arrayGeneros.forEach(genero=>{
   let li= document.createElement('li')
   li.innerHTML=genero
   li.addEventListener('click',event=>filtrarGenero(event.target.innerText))

   listadoGenero.appendChild(li)
})

function filtrarGenero(genero){
   let contenedorProductos = document.getElementById('productos');
   if(genero == 'Todos'){
      contenedorProductos.innerHTML = "";
      crearTarjetas(arrayLibros)
   }else{
      console.log(genero)
      let filtrado= arrayLibros.filter(x=>x.genero == genero)
      console.log(filtrado)
      contenedorProductos.innerHTML = "";
      crearTarjetas(filtrado)

   }
}

//Filtrado por categoria

let librosNuevos = arrayLibros.filter(x=>x.categoria == 'Nuevos')
let librosUsados = arrayLibros.filter(x=>x.categoria == 'Usados')
let librosNiños = arrayLibros.filter(x=>x.categoria == 'Niños')


let arrayCategoria = ['Nuevos','Usados', 'Niños']
let listadoCategoria = document.getElementById('listadoCategoria')

arrayCategoria.forEach(categoria=>{
   let li= document.createElement('li')
   li.innerHTML=categoria
   li.addEventListener('click',event=>filtrarCategoria(event.target.innerText))

   listadoCategoria.appendChild(li)
})

function filtrarCategoria(categoria){
   let contenedorProductos = document.getElementById('productos');
   if(categoria == 'Todos'){
      contenedorProductos.innerHTML = "";
      crearTarjetas(arrayLibros)
   }else{
      console.log(categoria)
      let filtradoCategoria= arrayLibros.filter(x=>x.categoria == categoria)
      console.log(filtradoCategoria)
      contenedorProductos.innerHTML = "";
      crearTarjetas(filtradoCategoria)

   }
}

//JQUERY

$(document).ready(function() {
   $("#basic-form").validate();
 });

 $('#subtituloForm').append('Dejanos tus datos para contactarte por novedades');

$('#tituloPagina').append('LIBROTECA');

$('#subtitulo').append('Libreria Online');

$('.tituloNosotros').append('Nosotros');

$('#descripcioNosotros').append('En nuestra libreria podras encontrar libros nuevos y usados en excelente estado. Tambien tenemos una gran variedad para niños!');

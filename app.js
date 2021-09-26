
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
let nameForm = $('#cliente');



function setNombreUsuario(){
   if(userNameInput.value == undefined){
      return
   }else{
     userName.innerHTML = `Bienvenido a Libroteca, ${userNameInput.value}!`;
     nombreUsuario = userNameInput.value;
     nameForm.css('display','none');
   }
}



let arrayCompras= [];



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

      botonCompra.addEventListener('click', event=>compraRealizada(element.precio))
      botonCompra.addEventListener('mouseover', event=>{
         botonCompra.classList.add('hoverBoton')
      });
      botonCompra.addEventListener('mouseleave', event=> {
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



$('#tituloPagina').animate(
   {  left:'250px',
      opacity:'0.5',
      height:'150px',
      width:'150px'} , 
      "slow",             
      function(){        
      });
      

 $('#subtituloForm').animate( {
   'font-size':30, 
   'border-width':5}, {
      duration : 'fast',
      specialEasing : {
         'font-size' : 'swing',
         'border-width' : 'linear'
      }
   });
   
   $('.tituloUbicacion').append('Estamos aca!!');

$(function(){
   $('.estilosForm').css('float','right');
   $('.estilosMapa').css('float','left');
});

$('.estilosMapa').css('margin-left','60px');
$('.estilosForm').css('margin-right','200px');



$('#saludoFinal').append('Gracias por visitarnos');
$('#saludoFinal').css('margin-top','700px');

$('#descripcioNosotros').css('color', '#1abc9c')
        .slideUp(1000)
        .slideDown(2000);
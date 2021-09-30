const contenedorCarrito = document.getElementById('contenedorCarrito')
const contenedorCompra = document.getElementById('contenedorCompra');
const areaCompra = document.getElementById('areaCompra');
const mensajeCarritoVacio = document.createElement('span');
mensajeCarritoVacio.innerHTML='El carrito está vacio :('
const botonCompra = document.getElementById('botonCompra');
botonCompra.onclick=()=>realizarCompra()
let carritoLibros;
mostrarProductos = ()=>{
    let carrito = localStorage.getItem('Compras');
    if(carrito){
        let array = JSON.parse(carrito)
        array.forEach(x=>librosComprados(x))
    }else{
        contenedorCarrito.append(mensajeCarritoVacio)
        contenedorCompra.innerHTML=""
    }
}

mostrarProductos();
calcularCompra();

function librosComprados(libro){
    let divTarjeta = document.createElement('div');
    let tapaLibros = document.createElement('img');
    let tituloLibros = document.createElement('h4');
    let removerLibro = document.createElement('span');
    removerLibro.classList.add('removerBtn')
    divTarjeta.classList.add('card');
    removerLibro.innerHTML='X';

    tapaLibros.src = libro.imagen;
    tituloLibros.innerHTML = libro.titulo;

    removerLibro.addEventListener('click', (event)=>{
        remover(libro.titulo)
    })

    divTarjeta.append(tapaLibros, tituloLibros,removerLibro);
    contenedorCarrito.appendChild(divTarjeta);
}

function calcularCompra(){
    let carrito = JSON.parse(localStorage.getItem('Compras'));
    const precio = document.getElementById('precioFinal');
    const cantLibros = document.getElementById('cantLibros');
    cantLibros.innerHTML = `Está adquiriendo: ${carrito.length} libro/s`
    let precioFinal = reducer(carrito);
    precio.innerHTML = `PRECIO FINAL: $${precioFinal}`;
    areaCompra.append(precio);
    areaCompra.append(cantLibros)
}

function realizarCompra(){
    const userNameInput = document.getElementById('userTag');
    const direccion = document.getElementById('direccion');
    const email = document.getElementById('email');
    console.log(userNameInput.value)
    if(userNameInput.value == "" || direccion.value == "" || email.value == ""){
        // alert('Complete todos los campos para realizar la compra')
        return
    }else{
        let mensaje = document.createElement('div');
        mensaje.innerHTML = 'Su compra fue realizada!';
        contenedorCompra.append(mensaje);
        mensaje.classList.add('mensajePopUp');
        setTimeout(()=>{
            contenedorCompra.removeChild(mensaje)
            mensaje.classList.remove('mensajePopUp');
        },3000);
        localStorage.setItem('Compras',"");
        contenedorCarrito.innerHTML="";
        document.getElementById('carritoTitle').innerHTML='TU CARRITO ESTÁ VACIO 😭';
        document.getElementById('formCompra').innerHTML="";
        document.getElementById('infoCompra').innerHTML="";
        document.getElementsByClassName('userData').style.display='none';
        contenedorCompra.style.border='none';
        botonCompra.style.display='none'
        userNameInput.value="";
        direccion.value="";
        email.value="";

    }
}
function remover(libro){
    let carrito = JSON.parse(localStorage.getItem('Compras'));
    let carritoLibros = carrito;
    console.log(carrito)
    let index = carritoLibros.find(x=>x.titulo == libro.titulo);
    console.log(index)
    console.log(carrito)
    carrito.splice(index,1);
    console.log(carrito)
    localStorage.setItem('Compras', JSON.stringify(carrito))
    contenedorCarrito.innerHTML = "";
    mostrarProductos();
}

function reducer(compra){
    console.log(compra)
    let preciosLibros = compra.map(x=>parseInt(x.precio));
    let precioFinal = preciosLibros.reduce((a,b)=>a + b);
    return precioFinal
}



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
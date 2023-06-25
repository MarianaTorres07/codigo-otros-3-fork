// Tenemos un li de productos

//Crear un arreglo con su respectivo key: value
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];  //agregarle un ;

//cambiar el .getElementsByName por el ID
const li = document.getElementById("lista-de-productos");
const $i = document.querySelector('.input');

//Añadir la funcion displayProductos
function displayProductos(productos){
  //              i es menor que la longitud de productos, i++
  for (let i = 0; i < productos.length; i++) {
    //Crear eLemento (div)
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
    //Append el titulo y la imagen al producto div
    d.appendChild(ti);
    d.appendChild(imagen);
    //Append el producto div a la lista
    li.appendChild(d);
  } //fin del for 

}
//Invocar la funcion
displayProductos(productos);

//Agregar # para el id
const botonDeFiltro = document.querySelector("#button");

botonDeFiltro.onclick = function() {
  //eliminar productos existentes de la lista
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
  //          obtener el valor del input
  const texto = $i.value;
  //imprime en consola lo escrito del input
  console.log(texto);

                            //invocar la funcion filtrado (del funcion arrow)...
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    //crear elemento tipo (div)
    var d = document.createElement("div");
    d.classList.add("producto");
  
    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
    
    
    d.appendChild(ti);
    d.appendChild(imagen);
    
    li.appendChild(d);
  }
}; //fin de la funcion del filtro

  //funcion tipo arrow
  const filtrado = (productos = [], texto) => {
    //Va retonar los productos del tipo de color que escriba y la descripcion
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  }; 

// Lista de compras vacía
let listaDeCompras = [];

// Una función para agregar un producto (sin objetos duplicados)
const agregarProducto = (producto) => {
  if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`<Producto "${producto}" agregado a la lista>`);
  } else {
    console.log(`<El producto "${producto}" ya está en la lista>`);
  }
};

// Función para eliminar un producto de la lista


const eliminarProducto = (producto) => {
  const index = listaDeCompras.indexOf(producto);
  if (index !== -1) {
    listaDeCompras.splice(index, 1);
    console.log(`<Producto "${producto}" eliminado de la lista>`);
  } else {
    console.log(`<El producto "${producto}" no se encuentra en la lista>`);
  }
};

// Función para mostrar la lista completa ya con los objetos.


const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("<<La lista de compras está vacía>>");
  } else {
    console.log("<<Lista de compras:");
    listaDeCompras.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto}`);
    });
  }};


// Ejemplos:

agregarProducto("Pan");
agregarProducto("Leche");
agregarProducto("Webos");
agregarProducto("Pan");  // No se agregará porque ya hay pan
// Mostramos lista
mostrarLista();
// Quitamos algo
eliminarProducto("Leche");
mostrarLista();
eliminarProducto("Carne");  // No está en la lista, aparecerá el mensaje de error

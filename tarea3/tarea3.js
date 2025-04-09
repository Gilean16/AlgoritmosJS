
// Lista ejemplo:

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// Filtrar productos que cuesten menos de $1000:

const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("Productos con precio menor a $100:");
console.log(productosBaratos);

// Ordenamos los productos filtrados alfabéticamente por nombre con un sort de compare.

const productosOrdenados = productosBaratos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Productos ordenados alfabéticamente:");
console.log(productosOrdenados);

// Generamos un nuevo arreglo con solo los nombres de los productos


const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("Nombres de los productos filtrados y ordenados:");
console.log(nombresProductos);

// (Lo opcional) Verificar si hay al menos un producto de la categoría 'Educación' comparando los arrays
// Y si hay algo que dice educacion

const hayEducacion = productos.some(producto => producto.categoria === "Educación");
console.log("¿Hay algún producto de la categoría 'Educación'? " + hayEducacion);

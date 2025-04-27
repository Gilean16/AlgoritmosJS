const fs = require('fs');
const prompt = require('prompt-sync')();

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 *
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
  let notas = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    console.log('\n📝 Notas guardadas:');
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. Título: ${nota.titulo}`);
      console.log(`   Contenido: ${nota.contenido}\n`);
    });
  } else {
    console.log('⚠️ No hay notas guardadas.');
  }
}

/**
 * Elimina una nota por su título:
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    let notas = JSON.parse(data);

    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    if (notas.length === notasRestantes.length) {
      console.log(`No se encontró una nota con el título "${titulo}".`);
    } else {
      fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
      console.log(`Nota con título "${titulo}" eliminada.`);
    }
  } else {
    console.log('No hay notas para eliminar.');
  }
}

/**
 * Menú principal de la aplicación
 */
function menu() {
  let opcion = '';

  while (opcion !== '4') {
    console.log('\n Gestor de notas');
    console.log('1. Agregar nota');
    console.log('2. Listar notas');
    console.log('3. Eliminar nota');
    console.log('4. Salir');

    opcion = prompt('Selecciona una opción (1-4): ');

    switch (opcion) {
      case '1':
        const titulo = prompt('Titulo de la nota: ');
        const contenido = prompt('Contenido de la nota: ');
        agregarNota(titulo, contenido);
        break;
      case '2':
        listarNotas();
        break;
      case '3':
        const tituloEliminar = prompt('Titulo de la nota a eliminar: ');
        eliminarNota(tituloEliminar);
        break;
      case '4':
        console.log('Hasta luego!');
        break;
      default:
        console.log('Opcionn no válida. Intenta de nuevo.');
    }
  }
}

// Ejecutar el menú
menu();


// Recordatorio de uso: 
// 1. bash promp sync: npm install prompt-sync
// 2. correr: node proyecto.js


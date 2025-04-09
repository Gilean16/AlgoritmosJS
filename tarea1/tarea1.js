//Aquí esta la tarea 1.

var destinos = [];  //var con una lista vacia.

//Una función que permite guardar los datos del destino 

function registrarDestino(destino, fecha, transporte) { 
    destinos.push({
        destino: destino,
        fecha: fecha,
        transporte: transporte
    });
}

//Una calculadora que funciona a base de los datos del destino

function calcularCosto(destino, transporte) {
    var costoBase = 100;
    if (transporte === 'avión') {
        costoBase += 300;
    } else if (transporte === 'bus') {
        costoBase += 100;
    }
    return costoBase;
}

// Una funcion que nos deja ver los itinierarios creados en base al destino seleccionado con
// sus datos.

function mostrarItinerario() {
    for (var i = 0; i < destinos.length; i++) {
        var viaje = destinos[i];
        console.log("Viaje a " + viaje.destino + " el " + viaje.fecha + " en " + viaje.transporte + 
                    ". Costo estimado: $" + calcularCosto(viaje.destino, viaje.transporte));
    }
}

// Usamos ES6

// Ahora el var es const para destinos.

const destinos = [];

// Igual para los destinos.

const registrarDestino = (destino, fecha, transporte) => {
    destinos.push({ destino, fecha, transporte });
};

const calcularCosto = (destino, transporte) => {
    let costoBase = 100;
    switch (transporte) {
        case 'avión':
            costoBase += 300;
            break;
        case 'bus':
            costoBase += 100;
            break;
        case 'tren':
            costoBase += 150;
            break;
    }
    return costoBase;
};

const mostrarItinerario = () => {
    destinos.forEach(viaje => {
        console.log(`Viaje a ${viaje.destino} el ${viaje.fecha} en ${viaje.transporte}. Costo estimado: $${calcularCosto(viaje.destino, viaje.transporte)}`);
    });
};



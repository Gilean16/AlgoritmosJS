import { registrarDestino, obtenerDestinos } from '../viajes.js';
import { calcularCosto } from '../costos.js';

const mostrarItinerario = () => {
    const destinos = obtenerDestinos();
    destinos.forEach(({ destino, fecha, transporte }) => {
        console.log(`Viaje a ${destino} el ${fecha} en ${transporte}. Costo estimado: $${calcularCosto(destino, transporte)}`);
    });
};

// Ejemplos
registrarDestino('Chetumal', 'jueves 3 de marzo 2025', 'avión');
registrarDestino('Pantitlan XD', '10 de octubre 2025', 'bicitaxi');
mostrarItinerario();

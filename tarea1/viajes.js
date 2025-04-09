const destinos = [];

const registrarDestino = (destino, fecha, transporte) => {
    destinos.push({ destino, fecha, transporte });};

const obtenerDestinos = () => destinos;

export {registrarDestino, obtenerDestinos};

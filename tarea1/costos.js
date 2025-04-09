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
        default:
            costoBase += 50;
    }

    return costoBase;};

export {calcularCosto};

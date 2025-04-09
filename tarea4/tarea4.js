const invitados = ["Georgina", "Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo", "Tonatiuh"];

//Creamos la funcion para unier parejas,

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        const inicial1 = arr[inicio][0]; // Primera letra del primer nombre
        const inicial2 = arr[siguiente][0]; // Primera letra del segundo nombre

        if (inicial1 === inicial2) {
            return [arr[inicio], arr[siguiente]]; // Si las iniciales coinciden, devolvemos el par
        } // de nombres

        // Avanzamos los punteros
        inicio++;
        siguiente++;
    }

    return null; // Si no se encuentra ningún par (Gilberto, Tonatiub)
}

console.log(encontrarPareja(invitados));
// Resultado esperado: ["Carlos", "Cecilia"] o sea los dos que tienen la letra C.

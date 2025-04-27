function findMax(arr) {

    // Caso base: si el arreglo tiene un solo elemento (ese es el maximo)
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir el arreglo en dos mitads
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Llamar recursivamente a la función para ambas mitades

    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar las soluciones comparando los maximos
    return Math.max(leftMax, rightMax);
}

// ejemplo de entrada

const numbers = [3, 8, 2, 11, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10

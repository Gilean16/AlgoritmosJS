function findLongestWord(text) {
    // Paso 1: Dividir el texto en palabras
    const words = text.split(' ');

    // Inicializar la palabra más larga
    let longestWord = '';

    // Paso 2: Reccorremos sobre cada palabra
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];

        // Paso 3: Comparamos la longitud de la palabra actual con La más larga
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }

    // Paso 4: Devolvemos la palabra más larga encontrada
    return longestWord;
}

// un ejemplo de uso:
const inputText = "La cotorrisa, Javascript, Parangaro";
const longest = findLongestWord(inputText);
console.log("La palabra más larga es:", longest);

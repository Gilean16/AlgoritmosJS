
//Prueba

const gifts = ["peluche", "libro", "bicicleta", "videojuego", "calcetines", "rompecabezas"];

    function findGift(gifts, giftName, index = 0) {
      if (index === gifts.length) {
        return `El regalo "${giftName}" no está en la lista.`;
      }

      if (gifts[index].toLowerCase() === giftName.toLowerCase()) {
        return `El regalo "${giftName}" está en la posición ${index}.`;
      }

      return findGift(gifts, giftName, index + 1);
    }

    function searchGift() {
      const input = document.getElementById("giftInput").value.trim();
      const resultDiv = document.getElementById("result");

      if (input === "") {
        resultDiv.textContent = "Por favor, ingresa un nombre de regalo";
        return;
      }

      const result = findGift(gifts, input);
      resultDiv.textContent = result;
}

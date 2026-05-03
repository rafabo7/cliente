// Genera un color aleatorio en formato hex
function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Devuelve un número aleatorio entre min y max (incluidos)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Genera una lista de números aleatorios con color
function generarListaAleatoria() {
  const cantidad = randomInt(5, 10);
  return Array.from({ length: cantidad }, () => {
    const valor = randomInt(15, 50);
    return {
      valor,
      color: randomColor(),
    };
  });
}


export { generarListaAleatoria };

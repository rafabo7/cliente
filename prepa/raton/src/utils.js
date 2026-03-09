// Devuelve dos posiciones distintas aleatorias de la lista de casillas desbloqueadas
// Entrada: array de objetos {row, col}
// Salida: array de dos objetos distintos [{row, col}, {row, col}]
export function elegirDosDistintas(casillas) {
  if (casillas.length < 2) return [];
  const idxs = [...casillas.keys()];
  const i1 = idxs.splice(Math.floor(Math.random() * idxs.length), 1)[0];
  const i2 = idxs[Math.floor(Math.random() * idxs.length)];
  return [casillas[i1], casillas[i2]];
}

function map(array, func) {
    // Caso base: array vacío → devolvemos array vacío
    if (array.length === 0) return [];

    // Tomamos el primer elemento transformado
    const transformed = func(array[0]);

    // Y lo concatenamos con el resultado de map aplicado al resto del array
    return [ transformed, ...map(array.slice(1), func) ];
}

console.log(map([1,2,3], x => x * 2))
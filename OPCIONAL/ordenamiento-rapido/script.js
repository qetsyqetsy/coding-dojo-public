function particionHoare(array, inicio, fin) {
    /* 
    Particiona la matriz 'array' entre los índices 'inicio' y 'fin'
    usando el algoritmo de Hoare
    
    Retorna la posición del pivote y coloca los elementos menores
    que el pivote a su izquierda y los mayores a su derecha
    
    Ejemplo:
    const array = [5, 2, 4, 1, 3];
    const pivote = particionHoare(array, 0, 4); 
    console.log(array); // [1, 2, 3, 4, 5]
    console.log(pivote); // 2 
    */

    const pivote = array[fin];
    let i = inicio - 1;

    for (let j = inicio; j < fin; j++) {
        if (array[j] <= pivote) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[fin]] = [array[fin], array[i + 1]];
    return i + 1;
}

function quicksort(array, inicio, fin) {
    /* 
    Ordena la matriz 'array' entre los índices 'inicio' y 'fin' usando
    el algoritmo quicksort.
    */

    if (inicio < fin) {
        const pivote = particionHoare(array, inicio, fin);
        quicksort(array, inicio, pivote - 1);
        quicksort(array, pivote + 1, fin);
    }
}

/* 

La complejidad de tiempo Big 0 de Quicksort es 0(n log n) en el caso promedio 
y 0(n^2) en el peor caso.

Aunque el peor caso de QuickSort es O(n^2), se llama "quick" porque en la práctica es muy rápido 
para la mayoría de las entradas. La complejidad temporal Big Omega de QuickSort es O(n log n) 
y la complejidad temporal Big Theta también es O(n log n), lo que significa que en promedio, 
QuickSort es eficiente.

*/
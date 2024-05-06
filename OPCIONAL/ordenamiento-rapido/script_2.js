/* Algoritmo de Partición de Hoare */

function hoarePartition(arr, low, high) {
    let pivot = arr[Math.floor((low + high) / 2)]; 
    let i = low - 1; 
    let j = high + 1;

    while (true) {
        do {
            i++;
        } while (arr[i] < pivot); 

        do {
            j--;
        } while (arr[j] > pivot); 

        if (i >= j) {
            return j;
        }

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

/* 
Una vez que tenemos la lógica de partición, podemos proceder a escribir la función Quicksort.
Quicksort llamará al algoritmo de partición y le pasará el array para ordenar 
junto con los límites. La posición de pivot de la función de partición será utilizada por Quicksort
para hacer el sorting de manera recursiva con diferentes límites.

*/

/* Algoritmo Quicksort */

function quicksort(arr, low, high) {
    if (low < high) {
        let pivotIndex = hoarePartition(arr, low, high);
        quicksort(arr, low, pivotIndex);
        quicksort(arr, pivotIndex + 1, high); 
    }
}

// Para empezar el proceso de quicksort 
let arr = [29, 10, 14, 37, 13];
quicksort(arr, 0, arr.length - 1); 
console.log(arr); // Sorted array

/* Bonus 1 */

/* 
Elegir una estrategia de pivot es crucial para garantizar la eficiencia de Quicksort. 
Elegir el valor más hacia la izquierda como el pivot puede llevar a los peores casos,
especialmente cuando se ordena un array ya ordenado. Esta elección puede impactar 
de manera significativa la complejidad de tiempo debido a las llamadas recursivas 
en arrays ordenados o casi ordenados.
*/

/* Bonus 2 */

/* 
La complejidad de tiempo de Quicksort es O(n log n) en promedio. Esta complejidad 
es ocasionada por el proceso de partición y las llamadas recursivas para ordenar
los subarrays.
*/

/* Bonus 3 */

/* 
Quicksort recibe su nombre por su desempeño por caso en promedio en lugar de su peor situación.
En la mejor situación posible, la complejidad de tiempo es Ω(n log n) y, en el caso promedio, 
es Θ(n log n). Estas complejidades muestran la eficiencia del Quicksort en la mayoría de las
situaciones prácticas.
*/
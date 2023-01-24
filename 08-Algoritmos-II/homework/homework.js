'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;

  var pivot = array[0];
  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }

  return quickSort(left).concat(pivot).concat(quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length === 1) return array;

  var middlePos = Math.floor(array.length/2);
  var left = array.slice(0, middlePos);
  var right = array.slice(middlePos);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var leftIndex = 0;
  var rightIndex = 0;
  var arrayResult = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arrayResult.push(left[leftIndex]);
      leftIndex++;
    } else {
      arrayResult.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return arrayResult.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

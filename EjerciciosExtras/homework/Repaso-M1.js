const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algún elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código acá:

    var sum = 0;
    
    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) sum += countArray(array[i]);
        else sum += array[i];
    }

    return sum;
}


// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Debería devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades más, luego a3 tiene otras 3 y por último c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código acá:

    var sum = 0;

    for (var key in obj) {
        sum++;
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) sum += countProps(obj[key]);
    }

    return sum;
}


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a números por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaración: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kiricocho'] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código acá:

    var count = 0;
    var current = this.head;

    while (current) {
        if (isNaN(current.value)) {
            count++;
            current.value = "Kiricocho";   
        }
        current = current.next;
    }

    return count;
}


// Implementar la función mergeQueues que a partir de dos queues recibidas por parámetro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código acá:

    var newQueue = new Queue();

    while(queueOne.size() || queueTwo.size()) {
        var element1 = queueOne.dequeue();
        var element2 = queueTwo.dequeue();
        if (element1) newQueue.enqueue(element1);
        if (element2) newQueue.enqueue(element2);
    }

    return newQueue;
}


// Implementar la función closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos números
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código acá:

    return function(number) {
        return number * multiplier;
    }
}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del árbol
BinarySearchTree.prototype.sum = function() {
    // Tu código acá:

    var sum = 0;

    if (!this.value) return 0;
    if (!this.left && !this.right) return this.value;

    if (!this.left) return this.value + this.right.sum();
    if (!this.right) return this.value + this.left.sum();

    return this.value + this.left.sum() + this.right.sum();
}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}
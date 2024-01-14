// Definición de la clase Nodo que representa un nodo en el árbol binario
var Nodo = /** @class */ (function () {
    // Constructor que inicializa el nodo con un valor dado
    function Nodo(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
    return Nodo;
}());
// Definición de la clase ArbolBinario que representa el árbol binario
var ArbolBinario = /** @class */ (function () {
    // Constructor que inicializa el árbol sin raíz
    function ArbolBinario() {
        this.raiz = null;
    }
    // Método para insertar un nuevo valor en el árbol
    ArbolBinario.prototype.insertar = function (valor) {
        this.raiz = this.insertarNodo(this.raiz, valor);
    };
    // Método privado para insertar un nuevo nodo en el árbol de forma recursiva
    ArbolBinario.prototype.insertarNodo = function (nodo, valor) {
        // Si el nodo es nulo, creamos un nuevo nodo con el valor proporcionado
        if (nodo === null) {
            return new Nodo(valor);
        }
        // Si el valor es menor que el valor actual del nodo, lo insertamos en el subárbol izquierdo
        if (valor < nodo.valor) {
            nodo.izquierda = this.insertarNodo(nodo.izquierda, valor);
        }
        // Si el valor es mayor que el valor actual del nodo, lo insertamos en el subárbol derecho
        else if (valor > nodo.valor) {
            nodo.derecha = this.insertarNodo(nodo.derecha, valor);
        }
        return nodo;
    };
    // Método para imprimir los valores del árbol en orden ascendente
    ArbolBinario.prototype.imprimirEnOrden = function () {
        this.imprimirEnOrdenRecursivo(this.raiz);
    };
    // Método privado para imprimir los valores del árbol de forma recursiva
    ArbolBinario.prototype.imprimirEnOrdenRecursivo = function (nodo) {
        if (nodo !== null) {
            // Recorremos el subárbol izquierdo
            this.imprimirEnOrdenRecursivo(nodo.izquierda);
            // Imprimimos el valor actual del nodo
            console.log(nodo.valor);
            // Recorremos el subárbol derecho
            this.imprimirEnOrdenRecursivo(nodo.derecha);
        }
    };
    return ArbolBinario;
}());
// Ejemplo de uso
var arbol = new ArbolBinario();
// Insertamos algunos valores en el árbol
arbol.insertar(5);
arbol.insertar(3);
arbol.insertar(8);
arbol.insertar(2);
arbol.insertar(4);
arbol.insertar(7);
arbol.insertar(9);
// Imprimimos el árbol en orden ascendente
console.log("Árbol binario en orden:");
arbol.imprimirEnOrden();
//tsc arbolbinario.ts
//node arbolbinario.js

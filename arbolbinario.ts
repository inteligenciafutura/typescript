// Definición de la clase Nodo que representa un nodo en el árbol binario
class Nodo {
  valor: number;        // Valor almacenado en el nodo
  izquierda: Nodo | null;   // Referencia al nodo hijo izquierdo
  derecha: Nodo | null;     // Referencia al nodo hijo derecho

  // Constructor que inicializa el nodo con un valor dado
  constructor(valor: number) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
}

// Definición de la clase ArbolBinario que representa el árbol binario
class ArbolBinario {
  raiz: Nodo | null;   // Raíz del árbol

  // Constructor que inicializa el árbol sin raíz
  constructor() {
    this.raiz = null;
  }

  // Método para insertar un nuevo valor en el árbol
  insertar(valor: number) {
    this.raiz = this.insertarNodo(this.raiz, valor);
  }

  // Método privado para insertar un nuevo nodo en el árbol de forma recursiva
  private insertarNodo(nodo: Nodo | null, valor: number): Nodo {
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
  }

  // Método para imprimir los valores del árbol en orden ascendente
  imprimirEnOrden() {
    this.imprimirEnOrdenRecursivo(this.raiz);
  }

  // Método privado para imprimir los valores del árbol de forma recursiva
  private imprimirEnOrdenRecursivo(nodo: Nodo | null) {
    if (nodo !== null) {
      // Recorremos el subárbol izquierdo
      this.imprimirEnOrdenRecursivo(nodo.izquierda);
      // Imprimimos el valor actual del nodo
      console.log(nodo.valor);
      // Recorremos el subárbol derecho
      this.imprimirEnOrdenRecursivo(nodo.derecha);
    }
  }
}

// Ejemplo de uso
const arbol = new ArbolBinario();

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
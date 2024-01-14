// Definición de un decorador llamado changeName que toma un parámetro 'data' de tipo string
function changeName(data: string) {
    // El decorador devuelve una función que toma un constructor de clase como parámetro
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
      // La función interna devuelve una clase extendida del constructor original
      return class extends constructor {
        // Agrega una propiedad 'name' a la clase extendida y le asigna el valor del parámetro 'data'
        name = data;
      }
    }
  }
  
  // Aplicación del decorador changeName a la clase Person con el argumento 'Carlos'
  @changeName('Carlos')
  class Person {
    // Propiedad 'name' de la clase Person
    name: string;
  
    // Constructor de la clase Person que toma un parámetro 'name'
    constructor(name: string) {
      this.name = name;
    }
  
    // Método sayHi que imprime un saludo con el nombre de la persona
    sayHi() {
      console.log(`${this.name} says hi!`)
    }
  }
  
  // Creación de una nueva instancia de la clase Person con el nombre 'Pepa' y llamada al método sayHi
  new Person('Pepa').sayHi();
  
  //tsc decorador.ts
  //node decorador.js
class Singleton {
    private static instance: Singleton | null = null;
  
    // Evitar que se pueda instanciar la clase directamente desde fuera
    private constructor() {}
  
    // Método estático para obtener la instancia única
    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  
    // Otros métodos y propiedades de la clase
    public showMessage(): void {
      console.log("¡Hola desde la instancia Singleton!");
    }
  }
  
  // Uso del Singleton
  const singletonInstance1 = Singleton.getInstance();
  const singletonInstance2 = Singleton.getInstance();
  
  // Ambas variables apuntan a la misma instancia
  console.log(singletonInstance1 === singletonInstance2); // true
  
  // Puedes llamar a métodos de la instancia única
  singletonInstance1.showMessage(); // ¡Hola desde la instancia Singleton!
  singletonInstance2.showMessage(); // ¡Hola desde la instancia Singleton!
  
  //tsc singleton.ts
  //node singleton.js
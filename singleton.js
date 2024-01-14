var Singleton = /** @class */ (function () {
    // Evitar que se pueda instanciar la clase directamente desde fuera
    function Singleton() {
    }
    // Método estático para obtener la instancia única
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    // Otros métodos y propiedades de la clase
    Singleton.prototype.showMessage = function () {
        console.log("¡Hola desde la instancia Singleton!");
    };
    Singleton.instance = null;
    return Singleton;
}());
// Uso del Singleton
var singletonInstance1 = Singleton.getInstance();
var singletonInstance2 = Singleton.getInstance();
// Ambas variables apuntan a la misma instancia
console.log(singletonInstance1 === singletonInstance2); // true
// Puedes llamar a métodos de la instancia única
singletonInstance1.showMessage(); // ¡Hola desde la instancia Singleton!
singletonInstance2.showMessage(); // ¡Hola desde la instancia Singleton!

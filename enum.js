// Definimos un enum con tres valores
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 1] = "Admin";
    Roles[Roles["User"] = 3] = "User";
    Roles[Roles["Guest"] = 0] = "Guest";
})(Roles || (Roles = {}));
// Declaramos una variable con tipo enum
var rol = Roles.Admin;
// Imprimimos la variable por pantalla
console.log(rol); // Admin
//tsc enum.ts
//node enum.js

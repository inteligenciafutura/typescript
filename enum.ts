// Definimos un enum con tres valores
enum Roles {
    Admin = 1,
    User = 3,
    Guest = 0,
  }
  
  // Declaramos una variable con tipo enum
  let rol: Roles = Roles.Admin;
  
  // Imprimimos la variable por pantalla
  console.log(rol); // Admin

//tsc enum.ts
//node enum.js
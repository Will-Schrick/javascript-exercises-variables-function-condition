// VARIABLES
// Crea una variable llamada "name" que contenga un string
const name = "Bill";
// Crea una variable llamada "age" que contenga un integer
const age = 25;
// Crea una variable llamada "hasHobbies" que contenga un booleano
const hasHobbies = true;
// Crea una variable llamada "empty" que sea undefined
const empty = undefined;
// Crea una variable llamada "undefinedVariable" que sea undefined sin usar la palabra undefined
let undefinedVariable;
// Crea una variable llamada "nullVariable" que sea null
const nullVariable = null;

// FUNCIONES
// Crea una función llamada "sayHello" que retorne "Hello"
function sayHello() {
  return "Hello";
}

// Crea una función llamada "add" que reciba dos números como argumentos y retorne la suma de ambos
function add(a, b) {
  return a + b;
}

// Crea una función llamada "sayHelloTo" que reciba un nombre como argumento y retorne "Hello, {name}"
function sayHelloTo(name) {
  return `Hello, ${name}`;
}

// CONDICIONALES
// Crea una condición que retorne "true" si "firstParam" es mayor a "secondParam" y "false" si no lo es

function isGreater(firstParam, secondParam) {
  // Aquí va tu código
  if (firstParam > secondParam) {
    return true;
  } else {
    return false;
  }
}

// Crea una condición que retorne "true" si "firstParam" es igual a "secondParam" y "false" si no lo es

function isEqual(firstParam, secondParam) {
  // Aquí va tu código

  if (firstParam === secondParam) {
    return true;
  } else {
    return false;
  }
}

// Crea una condición que retorne "true" si "firstParam" es diferente a "secondParam" y "false" si no lo es

function isDifferent(firstParam, secondParam) {
  // Aquí va tu código
  if (firstParam !== secondParam) {
    return true;
  } else {
    return false;
  }
}

// Crear una función llamada "isEven" que reciba un número como argumento y retorne "true" si es par o "false" si es impar

function isEven(number) {
  // Aquí va tu código
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// Crear una función llamada "isOdd" que reciba un número como argumento y retorne "true" si es impar o "false" si es par

function isOdd(number) {
  // Aquí va tu código
  if (number % 2 == 1) {
    return true;
  } else {
    return false;
  }
}

// Crear una función llamada "isPositive" que reciba un número como argumento y retorne "true" si es positivo o "false" si es negativo

function isPositive(number) {
  // Aquí va tu código
  if (number === 0) {
    return true;
  } else if (number > 0) {
    return true;
  } else {
    return false;
  }
}

// Crea una condición que retorne "true" si "firstParam" es mayor a "secondParam" o "thirdParam" es mayor a "fourthParam" y "false" si no lo es

function isGreaterOr(firstParam, secondParam, thirdParam, fourthParam) {
  // Aquí va tu código
  if (firstParam > secondParam || thirdParam > fourthParam) {
    return true;
  } else {
    return false;
  }
}

// Crea una condición que retorne "true" si "firstParam" es mayor a "secondParam" y "thirdParam" es mayor a "fourthParam" y "false" si no lo es

function isGreaterAnd(firstParam, secondParam, thirdParam, fourthParam) {
  // Aquí va tu código
  if (firstParam > secondParam && thirdParam > fourthParam) {
    return true;
  } else {
    return false;
  }
}

// Crea una función llamada "getRoleByName" que reciba un nombre como argumento
// el nombre puede ser Giorgio, Ivan o Marcos y debe retornar el rol de la persona
// Giorgio -> LI
// Ivan -> LI
// Marcos -> TA
// Si no es ninguna de esas personas debe retornar "Not found"

function getRoleByName(nombre) {
  if (nombre === "Giorgio" || nombre === "Ivan") {
    return "LI";
  } else if (nombre === "Marcos") {
    return "TA";
  } else {
    return "Not found";
  }
}

// Esta parte se puede hacer con if/else o con switch/case

function getRoleByName(name) {
  // Aquí va tu código
  switch (name) {
    case "Giorgio":
      return "LI";
    case "Ivan":
      return "LI";
    case "Marcos":
      return "TA";
    default:
      return "Not found";
  }
}

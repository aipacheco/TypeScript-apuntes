export function whatsMyType<T>(argument: T): T {
  //creamos una funcion generica que recibe un argumento de tipo T y devuelve un argumento de tipo T para no definir el tipo de argumento que recibe la funcion
  return argument;
}

let amIString = whatsMyType<string>("Hello world"); //se define el tipo de argumento que recibe la funcion
let amINumber = whatsMyType <number> (100);
let amIObject = whatsMyType <object>({ name: "John", age: 30 });
let amIArray = whatsMyType <number[]>([1, 2, 3]);

// console.log(amIString); //esto nos devuelve un string, en el intellisense nos da los metodos de los strings al poner un punto
// console.log(amINumber); //esto nos devuelve un number, en el intellisense nos da los metodos de los numbers al poner un punto
// console.log(amIObject); //esto nos devuelve un objeto, en el intellisense nos da los metodos de los objetos al poner un punto
// console.log(amIArray); //esto nos devuelve un array, en el intellisense nos da los metodos de los arrays al poner un punto

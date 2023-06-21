import { Product, taxCalculator } from "./06-function-destructuring";

const shoppingCart: Product[] = [
  {
    description: "Nokia A1",
    price: 150,
  },
  { description: "iPad Air", price: 350 },
];

const [total, tax ] = taxCalculator({
    products: shoppingCart,
    tax: 0.15,
 });

// console.log("Total", total);
// console.log("Tax", tax);

// Similar a React, podemos exportar e importar funciones, objetos, interfaces, etc. de un archivo a otro.
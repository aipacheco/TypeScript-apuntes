//creamos una interfaz para definir el tipo de un objeto
export interface Product {
  description: string;
  price: number;
}

//creamos un objeto de tipo Product
const phone: Product = {
  description: "Nokia A1",
  price: 150,
};

//creamos un objeto de tipo Product
const tablet: Product = {
  description: "iPad Air",
  price: 350,
};

//creamos una interfaz para definir el tipo de un objeto
interface TaxCalculatorOptions {
  tax: number;
  products: Product[];
}

//creamos una funcion que recibe un objeto de tipo TaxCalculatorOptions y devuelve un array de numeros
//hacemos esto para que la funcion sea mas flexible y pueda recibir mas parametros en el futuro
export const taxCalculator = (options: TaxCalculatorOptions): [number, number] => { //devuelve un array de numeros [number, number] y le indicamos que solo devuelve dos numeros
//const taxCalculator = ({tax, products}: TaxCalculatorOptions): [number, number] => { //desestructuramos el objeto options para que solo devuelva dos numeros

const {tax, products} = options; //desestructuramos el objeto options aqui por si en un futuro queremos añadir mas parametros al objeto options

let total = 0;

//  options.products.forEach((product) => { Esta seria la forma de hacerlo si no desestructuramos el objeto options
//    total += product.price;
//});
//return [total, total * options.tax];

products.forEach((product) => { //asi hariamos la desestructuracion con las constantes tax y products dentro de la funcion
    total += product.price;
});
return [total, total * tax];


//otra forma de hacerlo desestructurando el objeto options
//products.forEach(({price}) => {
//     total += price;
//   } );   
//  return [total, total * tax] }


//otra forma de hacerlo desestructurando el objeto options
//   options.products.forEach(({price}) => {
//     total += price;
//   } );          
//     return [total, total * options.tax];
};


const shoppingCart: Product[] = [phone, tablet];
const tax = 0.15;

const result = taxCalculator({ 
    products: shoppingCart, 
    // tax: tax se puede simplificar asi:
    tax 
});

//desestructuramos el array result
const [total, taxResult] = taxCalculator({
    products: shoppingCart,
    tax
});

// console.log("Total", total);
// console.log("TAX", taxResult);

export {};

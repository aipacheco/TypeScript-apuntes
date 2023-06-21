//creamos una interfaz para definir el tipo de un objeto
interface SuperHero {
    name: string;
    age: number;
    address: Address; //se puede poner directamente el tipo de la interfaz
    showAddress: () => string;
}

//creamos una interfaz para definir el tipo de un objeto
interface Address {
    street: string;
    country: string;
    city: string;
}

//creamos un objeto de tipo SuperHero
const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
// console.log( address );




export {};
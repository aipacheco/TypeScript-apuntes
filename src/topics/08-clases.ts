export class Person {
 // public name: string; //public significa que se puede acceder desde cualquier parte de la aplicacion
  //private address: string; //private significa que solo se puede acceder desde la clase donde se ha creado

//lo común en angular es crearlo en el constructor
    constructor(public name: string,public address: string = "No address"/*para recibir un parametro por defecto*/) {

    //lo podemos hacer como lo hemos hecho arriba o asi:
       // this.name = name;
       // this.address = address;
    }
}

//asi se haria extendiendo la clase Person
// export class Hero extends Person {
//     constructor(public alterEgo: string, public age: number, public realName: string) {
//         super(realName, "New York"); //super llama al constructor de la clase padre, hay que pasarle los parametros que necesita la clase padre
         //le estamos diciendo que el parametro name de la clase padre es igual al parametro realName de la clase Hero
//     }
// }

export class Hero  {
    
    constructor(public alterEgo: string, public age: number, public realName: string, public person: Person) {
    }
}


const tony = new Person("Tony Stark", "New York");
const ironman = new Hero("IronMan", 45, "Tony Stark", tony);//le pasamos el objeto tony de la clase Person como inyeccion de dependencias
const spiderman = new Person("Peter Parker");
//const ironman = new Person() esto da error porque no le estamos pasando los parametros que necesita la clase Person

console.log(ironman);
console.log(spiderman);//como no hemos pasado el parametro address, nos sale el parametro por defecto que hemos puesto en el constructor
//console.log(ironman.address); //esto da error porque address es privado y solo se puede acceder desde la clase donde se ha creado



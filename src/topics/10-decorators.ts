function classDecorator(constructor: any) {
  //esto es un decorador de clase, se usa para añadir funcionalidad a una clase
  return class extends constructor {
    newProperty = "new property"
    hello = "override"
  }
}

@classDecorator //Con este código, al crear una nueva instancia de SuperClass, esta instancia tendrá las propiedades newProperty y hello debido al decorador @classDecorator.


export class SuperClass {
  public myProperty: string = "ABC123"
  print() {
    console.log("Hello world")
  }
}


const myClass = new SuperClass()

console.log(myClass) //esto nos devuelve la clase SuperClass con las propiedades newProperty y hello

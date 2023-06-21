//funcion tradicional
function addNumbers(a: number, b: number) {
  return a + b;
}

//Arrow function
const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

//funcion con parametros opcionales y un parametro opcional (base) que siempre va a ser 2
function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
}

const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 2);
const resultMultiply = multiply(5);

//console.log({ result }); //si se pone entre llaves, se muestra como un objeto con propiedad result
//console.log({ result2 });
//console.log({resultMultiply});

//definimos la interfaz para que el parametro character tenga que tener las propiedades name y hp y sus tipos
interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

//funcion que recibe un personaje y un numero y le suma los puntos de vida
const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

//creamos un objeto de tipo Character
const strider: Character = {
  name: "Strider",
  hp: 100,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 20);
healCharacter(strider, 20)
strider.showHp();
export {};

const skills: string[] = ["bash", "counter", "healing"]; //da error si incluimos otro tipo de variables

//tipado en TS
interface Character{
    name: string
    hp: number
    skills: string[]
    hometown ? : string 
}
// para que sea opcional => ?

//un objeto en JS
const strider : Character ={
    name: 'Strider',
    hp: 100,
    skills: ['bash', 'counter'],

}

strider.hometown = 'Rivendell'

//console.table(strider)

export {};

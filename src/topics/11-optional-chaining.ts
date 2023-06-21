export interface Passenger{
name: string
children?: string[] //propiedad opcional
}

const passenger1 : Passenger ={
    name: "Fernando"
}

const passenger2 : Passenger ={
    name: "Melissa",
    children: ["Natalia", "Elisabeth"]
}

const printChildren = (passenger : Passenger) =>{
     const howManyChildren = passenger.children?.length || 0 //si children es undefined retorna 0 en lugar de undefined
    // const howMhowManyChildren = passenger.children!.length //el signo ! se llama not null asertion operator y puesto detrás de la propiedad indica que siempre va a venir definido
   if(!passenger.children){
    return 0
   } //si el signo ! va delante significa negación
    console.log(howManyChildren)
}

printChildren(passenger2)
printChildren(passenger1)
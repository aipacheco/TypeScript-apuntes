
//creamos una interfaz para definir el tipo de un objeto
interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

//creamos una interfaz para definir el tipo de un objeto
interface Details {
  author: string;
  year: number;
}

//creamos un objeto de tipo audioPlayer
const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 180,
  song: "The Trooper",
  details: { author: "Iron Maiden", year: 1983 },
};

//desestructuramos el objeto audioPlayer
//podemos desestructurar el objeto en la misma linea para luego desestructurar el objeto details
const {song, details} = audioPlayer;

// desestructuramos el objeto details
const {author} = details;

// console.log(song);
// console.log(author);

//asi hariamos la desestructuracion tradicional
const dragonBallZ: string[] = ["Goku", "Vegeta", "Trunks"];
//alternativa tradicional
// console.log( "personaje: ", dragonBallZ[3] || "No existe" );

//desestructuramos el array
//no necesitamos las demás posiciones pero sí la tercera, asi que las dejamos en blanco pero usamos , para indicar que hay algo
const [, , p3] : string[] = ["Goku", "Vegeta", "Trunks"];

// console.log(p3);





export {};

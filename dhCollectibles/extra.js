let numeros=[23,65,98,65,45,78,25,14,99,80];
let [primerNumero, ,tercerNumero, ,quintoNumero,...demasNumeros ] = numeros;
let nuevoArray=[...demasNumeros];
let mascotaa={
    nombre:sheiko,
    tipoDeMascota: perro,
    color: negro,
    raza:callejero,
}
let[nombre,tipoDeMascota,color,raza]=mascotaa;
console.log(`Hola, les presento a mi mascota. Su nombre es ${nombre}, es un hermoso ${tipoDeMascota}, de color ${color} y su raza es ${raza}.`);

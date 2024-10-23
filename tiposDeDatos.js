const nombre = 'Gregory';
const parrafo = 'Este es un parrafo';

const usuarioConectado = 'false';
const mayorQue = 10 > 2;

console.log(mayorQue);

//arrays - arreglos
const arreglo = ['texto',456,true,{propiedad:'valor'},[1,2,3]];
console.log(arreglo);


//objetos
const persona = {
    nombre: 'Gregory',
    edad: 21,
    carro: {
        marca:  'audi',
        color: 'negro'
    }
};
console.log(persona.carro.color);




//Funciones
function hola() {
    console.log('Hola');
}

hola();


//Null
//normalmente lo usamos cuando queremos especificar que un valor sea nulo
const miVariable = null;

//Undefined
//Undefined se usa para indicarnos que un valor no esta definido
const miVariable2 = undefined;
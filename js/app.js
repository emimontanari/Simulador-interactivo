// sacar el promedio de nota final y decir si esta aprobado o no
let nombreAlumno = prompt('Ingrese el nombre del alumno');
let primeraNota = parseInt(prompt('Ingrese la primera nota del alumno'));
let segundaNota = parseInt(prompt('Ingrese la segunda nota del alumno'));
let terceraNota = parseInt(prompt('Ingrese la tercera nota del alumno'));

const notas = [primeraNota, segundaNota,terceraNota];
const promedio = notas.length
//Sumar todas las notas mediante reduce
let notasTotal = notas.reduce(function(acumulador, valorActual){
    return acumulador + valorActual;
});

// sacar promedio de notasTotal dividido entre 3
function  promedioNotas(notasTotal){
    return Math.round(notasTotal / promedio);
};
let resultado = promedioNotas(notasTotal);


alert(`El promedio de ${nombreAlumno} es ${resultado}`);// IMPRIMIR RESULTADO

let aprobado = resultado >= 6 ? 'APROBADO' : 'DESAPROBADO';

alert(`El estado de ${nombreAlumno} es ${aprobado}`);// IMPRIMIR EL ESTADO DEL ALUMNO


//CREAR UN OBJETO CON LOS DATOS DEL ALUMNO Y IMPIMPRIMERLO
class Alumno {
    constructor(nombre,promedio,estado){
        this.nombre = nombre;
        this.promedio = promedio;
        this.estado = estado;
    }
};

const alumno = new Alumno(nombreAlumno,resultado,aprobado);

console.log(alumno);

window.addEventListener('load', imprimirResultado);

const div = document.querySelector('#resultado');

function imprimirResultado(){
    div.innerHTML = `
    <h1>Nombre del alumno: </h1> <span>${alumno.nombre}</span>
    <h2>Promedio del alumno:</h2> <span>${alumno.promedio}</span>
    <h3>${alumno.estado}</h3>
    `;
};
// sacar el promedio de nota final y decir si esta aprobado o no
// let nombreAlumno = prompt('Ingrese el nombre del alumno');
// let primeraNota = parseInt(prompt('Ingrese la primera nota del alumno'));
// let segundaNota = parseInt(prompt('Ingrese la segunda nota del alumno'));
// let terceraNota = parseInt(prompt('Ingrese la tercera nota del alumno'));

// const notas = [primeraNota, segundaNota,terceraNota];
// const promedio = notas.length
// Sumar todas las notas mediante reduce
// let notasTotal = notas.reduce(function(acumulador, valorActual){
//     return acumulador + valorActual;
// });

// sacar promedio de notasTotal dividido entre 3
// function  promedioNotas(notasTotal){
//     return Math.round(notasTotal / promedio);
// };
// let resultado = promedioNotas(notasTotal);


// alert(`El promedio de ${nombreAlumno} es ${resultado}`);// IMPRIMIR RESULTADO


// alert(`El estado de ${nombreAlumno} es ${aprobado}`);// IMPRIMIR EL ESTADO DEL ALUMNO





window.addEventListener('load', imprimirResultado);
// Variables globales
const formulario = document.querySelector('#formulario');
// eventos
formulario.addEventListener('submit', enviarFormulario);
//funciones
function enviarFormulario(e){
  e.preventDefault();
  let nombre = document.querySelector('#nombre').value;
  let primeraNota = parseInt(document.querySelector('#nota1').value)
  let segundaNota = parseInt(document.querySelector('#nota2').value)
  let terceraNota = parseInt(document.querySelector('#nota3').value)
  const notas = [primeraNota, segundaNota,terceraNota];
  const promedio = notas.length
  let notasTotal = notas.reduce(function(acumulador, valorActual){
    return acumulador + valorActual;
  });
  function  promedioNotas(notasTotal){
    return Math.round(notasTotal / promedio);
  }
  const resultado = promedioNotas(notasTotal);
  const estado = resultado >= 6 ? 'APROBADO' : 'DESAPROBADO';

  imprimirResultado(nombre,resultado,estado);
  // ocultar los resultados hasta que se envie el formulario
  const contenedorResultado = document.querySelector('#resultado');
  contenedorResultado.classList.remove('oculto');
  
};

function imprimirResultado(nombre,promedio,estado){
  // vaciar el contenido del div
  const contenedorResultado = document.querySelector('#resultado');
  contenedorResultado.innerHTML = '';

  let div = document.createElement('div');
  div.innerHTML = `
  <p class="header"> Resultado </p>
  <p class="font-bold"> Nombre: <span class="font-normal">${nombre} </span> </p>
  <p class="font-bold"> Promedio: <span class="font-normal">${promedio} </span> </p>
        <p class="font-bold"> Estado: <span id="status" class="font-normal">${estado} </span> </p>
    `;
    const resultadoDiv = document.querySelector('#resultado');
    resultadoDiv.appendChild(div);

    let h3 = document.querySelector('#status');
    if(estado === 'APROBADO'){
      h3.classList.add('verde');
      }else{
        h3.classList.add('rojo');
      }
};
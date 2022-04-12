// sacar el promedio de nota final y decir si esta aprobado o no
let nombreAlumno = prompt('Ingrese el nombre del alumno');
let primeraNota = parseInt(prompt('Ingrese la primera nota del alumno'));
let segundaNota = parseInt(prompt('Ingrese la segunda nota del alumno'));
let terceraNota = parseInt(prompt('Ingrese la tercera nota del alumno'));

function promedio(primeraNota, segundaNota, terceraNota){

      let resultado = (primeraNota + segundaNota + terceraNota) / 3
        
      return resultado

};



let resultado = promedio(primeraNota, segundaNota, terceraNota);


alert(`El promedio de ${nombreAlumno} es ${resultado}`);


function estado(resultado){
  if(resultado <= 10 && resultado >=6){
     return alert(`${nombreAlumno} esta APROBADO`)
  }else if(resultado <=5){
    return alert(`${nombreAlumno} esta DESAPROBADO`)
  }else{
    return alert('LA NOTA NO PUEDE SER MAYOR A 10')
  }
};

estado(resultado)

//Variables
const div = document.querySelector('div');
const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
let alumnos = [];
//Eventos
eventsListeners();

function eventsListeners(){

    formulario.addEventListener('submit', agregarAlumno);
    document.addEventListener('DOMContentLoaded', ()=>{
        alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
        imprimirHTML();
    });
};



function agregarAlumno(e){
    e.preventDefault();
    
    //Crear objeto alumno
    const alumno = {
        nombres: nombre.value,
        apellidos: apellido.value,
        notas: [parseInt(nota1.value),parseInt(nota2.value),parseInt(nota3.value)]
    };
    const promedio = sacarPromedio(alumno.notas);
    alumno.promedio = promedio;
    alumno.estado = estadoAlumno(promedio);
    //Agregar al array de alumnos
    alumnos = [...alumnos,alumno];

    const alertaPrevia = document.querySelector('.alerta');
    if(alertaPrevia){
        alertaPrevia.remove();
    }
    const alerta = document.createElement('div');
    alerta.classList.add('alerta');

    if(nombre.value === "" || apellido.value === "" || nota1.value === "" || nota2.value === "" || nota3.value === ""){
        alerta.textContent = "Por favor, llene todos los campos";
        alerta.classList.add('error');
        
    }else{
        Toastify({
            text: "Corriguiendo alumno... ⌛️",
            className: "info",
            duration: 2400,
            style: {
              background: "#112B3C",
              color:"#EFEFEF",
              fontSize: "1rem",
              textAlign: "center",
              fontWeight: "bold",
              width: "270px",
            }
          }).showToast();
        // alerta.textContent = "Alumno agregado";
        // alerta.classList.add('exito');
        //Imprimir en el HTML
        setTimeout(() => {
            imprimirHTML();
            Toastify({
                text: "Alumno Corregido ✅",
                className: "info",
                duration: 2500,
                style: {
                  background: "#4E9F3D",
                  color:"#fff",
                  fontSize: "1rem",
                  textAlign: "center",
                  fontWeight: "bold",
                  width: "270px",
                }
              }).showToast();
        }, 2700);
        
        //Limpiar el formulario
        formulario.reset();
    }

    formulario.appendChild(alerta);
}


//Funcion para sacar el promedio
function sacarPromedio(notas){
    let suma = 0;
    for(let i = 0; i < notas.length; i++){
        suma += notas[i];
    }
    return Math.round(suma / notas.length);
};

// funcion para sacar estado del alumno
function estadoAlumno(promedio){
    if(promedio >= 6){
        return "APROBADO";
    }else{
        return "DESAPROBADO";
    }
}

const rowResultados = document.querySelector('#rowResultados');
const table = document.querySelector('#table');
const tbody = document.querySelector('#tbody');

function imprimirHTML(){
    
    if(alumnos.length > 0){

        limpiarTabla();

        alumnos.forEach(alumno => {
            const {nombres, apellidos, notas, promedio, estado} = alumno;
            
            const row = document.createElement('tr');
            //imprimir los resultados en columnas
            row.innerHTML += `
            <td>${nombres}</td>
            <td>${apellidos}</td>
            <td>${notas[1]}</td>
            <td>${notas[2]}</td>
            <td>${notas[2]}</td>
            <td>${promedio}</td>
            <td>${estado}</td>
            `;
            tbody.appendChild(row);
            

            if(alumno.estado === "APROBADO"){
                row.style.backgroundColor = "green";
            }else{
                row.style.backgroundColor = "red";
            }
        });
    };
    sincronizarStorage();
};

//agregar storage
function sincronizarStorage(){
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
};

function limpiarTabla(){
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
};


//TODO:
//! Agregar FETCH AL PROYECTO





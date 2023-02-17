
var estudiantes = parseInt(prompt("Ingresa la cantidad de estudiantes: "));

const cedulas = [];
const nombres = [];
const notaMatematica = [];
const notaFisica = [];
const notaProgramacion = [];

var notaMaxMate = 0;
var notaMaxFisi = 0;
var notaMaxProgram = 0;

var unaMate = 0;
var dosMate = 0;
var tresMate= 0;

var aplazados = 0;
var aprobados = 0;

for(var i=0; i<estudiantes; i++){

    nombres [i] = parseInt(prompt("Ingresa el nombre del estudiante (" + i +")"));
    cedulas [i] = parseInt(prompt("Ingresa la cedula del estudiante de estudiantes: "));
    notaMatematica [i] = parseInt(prompt("Ingresar la nota de Matematica del estudiante: "));

    if(notaMatematica[i] > notaMaxMate){
        notaMaxMate = notaMatematica[i];
    }

    notaFisica [i] = parseInt(prompt("Ingresar la nota de Fisica del estudiante: "));

    
    if(notaFisica[i] > notaMaxFisi){
        notaMaxFisi = notaFisica[i];
    }

    notaProgramacion [i] = parseInt(prompt("Ingresar la nota de Programacion del estudiante: "));

    
    if(notaProgramacion[i] > notaMaxProgram){
        notaMaxProgram = notaProgramacion[i];
    }

    alert("El usuario fue agregado correctamente");
    

}

totalMate = 0;
totalFisica = 0;
totalProgram = 0;

for(var i=0; i<estudiantes; i++){
    totalMate += notaMatematica[i];
    totalFisica += notaFisica[i];
    totalProgram += notaProgramacion[i];


    if(notaMatematica[i] >10 && notaFisica[i] >10 && notaProgramacion[i] >10){
        aprobados ++;

    }
    else if(notaMatematica[i] <10 && notaFisica[i] <10 && notaProgramacion[i] <10){
        aplazados ++

    }

}


totalMate = totalMate / estudiantes;
totalFisica = totalFisica / estudiantes;
totalProgram = totalProgram / estudiantes;

document.write("El promedio total de Matematica es: " + totalMate );

document.write("<br>");

document.write("El promedio total de Fisica es: " + totalFisica );

document.write("<br>");

document.write("El promedio total de Programacion es: " + totalProgram );

document.write("<br>");

document.write("Cantidad de alumnos aplazados: " + aplazados );

document.write("<br>");

document.write("Cantidad de alumnos Aprobados" + aprobados );

document.write("<br>");

document.write("Nota maxima de Matematica: " + notaMaxMate );

document.write("<br>");

document.write("Nota maxima de Fisica: " + notaMaxFisi );

document.write("<br>");

document.write("Nota maxima de Programacion : " + notaMaxProgram );

document.write("<br>");


